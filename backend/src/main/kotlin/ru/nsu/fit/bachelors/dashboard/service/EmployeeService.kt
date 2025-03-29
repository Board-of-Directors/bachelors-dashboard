package ru.nsu.fit.bachelors.dashboard.service

import ru.nsu.fit.bachelors.dashboard.entity.EmployeeEntity

interface EmployeeService {
    /**
     * Получить всех работников.
     */
    fun getAll(): List<EmployeeEntity>
}
