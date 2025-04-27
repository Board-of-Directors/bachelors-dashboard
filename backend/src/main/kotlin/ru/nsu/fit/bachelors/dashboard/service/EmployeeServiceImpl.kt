package ru.nsu.fit.bachelors.dashboard.service

import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.entity.EmployeeEntity
import ru.nsu.fit.bachelors.dashboard.filter.EmployeeInternalFilter
import ru.nsu.fit.bachelors.dashboard.repository.EmployeeRepository

@Service
class EmployeeServiceImpl(
    private val employeeRepository: EmployeeRepository,
) : EmployeeService {
    override fun getAll(): List<EmployeeEntity> = employeeRepository.findAll()

    override fun getAllByIds(ids: List<Long>): List<EmployeeEntity> = employeeRepository.findAllById(ids)

    override fun save(entity: EmployeeEntity) {
        employeeRepository.save(entity)
    }

    override fun findByFilter(filter: EmployeeInternalFilter): List<EmployeeEntity> =
        employeeRepository.findAll(filter.toSpecification(), Pageable.unpaged()).toList()

    override fun deleteEmployee(id: Long) {
        employeeRepository.deleteById(id)
    }
}
