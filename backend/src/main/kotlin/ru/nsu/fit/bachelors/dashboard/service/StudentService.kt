package ru.nsu.fit.bachelors.dashboard.service

import ru.nsu.fit.bachelors.dashboard.entity.FileEntity
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

    /**
     * Получить студента по СНИЛС.
     */
    fun getByInsurance(insurance: String): StudentEntity

    /**
     * Найти студентов в таблице и сохранить.
     */
    fun saveFromTable(entity: FileEntity)
}
