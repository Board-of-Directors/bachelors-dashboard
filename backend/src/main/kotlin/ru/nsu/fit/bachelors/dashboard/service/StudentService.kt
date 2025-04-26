package ru.nsu.fit.bachelors.dashboard.service

import ru.nsu.fit.bachelors.dashboard.entity.StudentEntity
import ru.nsu.fit.bachelors.dashboard.filter.InternalStudentFilter

interface StudentService {
    /**
     * Получить список студентов по фильтру.
     *
     * @param filter фильтр для поиска студентов
     * @return список студентов
     */
    fun findByFilter(filter: InternalStudentFilter): List<StudentEntity>

    /**
     * Найти студента по СНИЛС.
     */
    fun findByInsurance(insurance: String): StudentEntity?
}
