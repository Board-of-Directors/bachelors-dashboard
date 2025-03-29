package ru.nsu.fit.bachelors.dashboard.service

import ru.nsu.fit.bachelors.dashboard.entity.EmployeeEntity

interface NotificationService {
    /**
     * Уведомить работника о регистрации.
     *
     * @param employeeEntity сущность работника
     * @param rawPassword пароль работника
     */
    fun notifyRegistration(
        employeeEntity: EmployeeEntity,
        rawPassword: String,
    )
}
