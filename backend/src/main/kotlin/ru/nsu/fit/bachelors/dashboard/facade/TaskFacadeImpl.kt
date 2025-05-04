package ru.nsu.fit.bachelors.dashboard.facade

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Transactional
import ru.nsu.fit.bachelors.dashboard.converter.TaskConverter
import ru.nsu.fit.bachelors.dashboard.dto.task.TaskDetailResponse
import ru.nsu.fit.bachelors.dashboard.dto.task.TasksResponse
import ru.nsu.fit.bachelors.dashboard.dto.task.request.ChangeTaskOrderRequest
import ru.nsu.fit.bachelors.dashboard.dto.task.request.TaskChangeRequest
import ru.nsu.fit.bachelors.dashboard.dto.task.request.TaskCreationRequest
import ru.nsu.fit.bachelors.dashboard.entity.EmployeeEntity
import ru.nsu.fit.bachelors.dashboard.entity.EmployeeTasksEntity
import ru.nsu.fit.bachelors.dashboard.entity.TaskEntity
import ru.nsu.fit.bachelors.dashboard.service.EmployeeService
import ru.nsu.fit.bachelors.dashboard.service.TaskService
import ru.nsu.fit.bachelors.dashboard.utils.enumValueOrThrow
import ru.nsu.fit.bachelors.dashboard.utils.parseDate

@Component
@RequiredArgsConstructor
class TaskFacadeImpl(
    private val taskConverter: TaskConverter,
    private val taskService: TaskService,
    private val employeeService: EmployeeService,
) : TaskFacade {
    override fun createTask(request: TaskCreationRequest) {
        val taskEntity = taskConverter.ofRequest(request)
        taskEntity.addEmployees((employeeService.getAllByIds(request.employees ?: listOf())))
        taskService.save(taskEntity)
    }

    override fun all(): List<TasksResponse> = taskConverter.toResponse(taskService.getAll().groupBy { it.status })

    @Transactional
    override fun changeTask(request: TaskChangeRequest) {
        val task = taskService.getById(request.id)
        request.name?.let { task.name = it }
        request.description?.let { task.description = it }
        request.status?.let { task.status = enumValueOrThrow(it) }
        request.deadline?.let { task.deadline = parseDate(it) }
    }

    @Transactional
    override fun changeOrder(request: ChangeTaskOrderRequest) {
        val tasksByIds =
            taskService
                .allByIds(request.ids.map { it.id })
                .associateBy { it.id }

        request.ids.mapIndexed { index, idDto ->
            tasksByIds[idDto.id]?.let {
                it.sequenceId = index.toLong()
                it.status = enumValueOrThrow(request.status)
            }
        }
    }

    override fun getDetail(id: Long): TaskDetailResponse = taskService.getById(id).toDetail()
}

private fun TaskEntity.toDetail(): TaskDetailResponse =
    TaskDetailResponse(
        id = this.id!!,
        name = this.name,
        description = this.description,
        sequenceId = this.sequenceId,
        created = this.created.toString(),
        deadline = this.deadline.toString(),
        status = this.status.toString(),
    )

private fun TaskEntity.addEmployees(employees: List<EmployeeEntity>) {
    this.employeeTasks.addAll(employees.map { EmployeeTasksEntity(employee = it, task = this) })
}
