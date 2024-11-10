package ru.nsu.fit.bachelors.dashboard.facade

import ru.nsu.fit.bachelors.dashboard.dto.student.request.StudentFilter
import ru.nsu.fit.bachelors.dashboard.dto.student.response.StudentResponse

interface StudentFacade {
    /**
     * Получить список студентов по фильтру.
     *
     * @param filter фильтр для поиска студентов
     */
    fun getByFilter(filter: StudentFilter): StudentResponse
}
