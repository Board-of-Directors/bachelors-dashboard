package ru.nsu.fit.bachelors.dashboard.service

import ru.nsu.fit.bachelors.dashboard.entity.EmployeeEntity
import ru.nsu.fit.bachelors.dashboard.filter.EmployeeInternalFilter

interface EmployeeService {
    /**
     * Получить всех работников.
     */
    fun getAll(): List<EmployeeEntity>

    /**
     * Получить всех работников по идентификаторам.
     */
    fun getAllByIds(ids: List<Long>): List<EmployeeEntity>

    /**
     * Сохранить работника.
     *
     * @param entity сущность работника
     */
    fun save(entity: EmployeeEntity)

    /**
     * Найти подходящих под фильтр сотрудников.
     *
     * @param filter фильтр сотрудников
     * @return подходящие под фильтр сотрудники
     */
    fun findByFilter(filter: EmployeeInternalFilter): List<EmployeeEntity>
}
