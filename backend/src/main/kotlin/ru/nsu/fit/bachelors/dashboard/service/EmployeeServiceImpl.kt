package ru.nsu.fit.bachelors.dashboard.service

import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.entity.EmployeeEntity
import ru.nsu.fit.bachelors.dashboard.repository.EmployeeRepository

@Service
class EmployeeServiceImpl(
    private val employeeRepository: EmployeeRepository,
) : EmployeeService {
    override fun getAll(): List<EmployeeEntity> = employeeRepository.findAll()
}
