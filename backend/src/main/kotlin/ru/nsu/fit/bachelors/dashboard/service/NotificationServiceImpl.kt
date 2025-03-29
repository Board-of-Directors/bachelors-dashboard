package ru.nsu.fit.bachelors.dashboard.service

import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.entity.EmployeeEntity

@Service
class NotificationServiceImpl : NotificationService {
    override fun notifyRegistration(
        employeeEntity: EmployeeEntity,
        rawPassword: String,
    ) {
        println("test notification to ${employeeEntity.email} with password $rawPassword")
    }
}
