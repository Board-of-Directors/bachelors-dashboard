package ru.nsu.fit.bachelors.dashboard.facade

import ru.nsu.fit.bachelors.dashboard.dto.group.request.GroupCreationRequest
import ru.nsu.fit.bachelors.dashboard.dto.group.request.GroupEditingRequest
import ru.nsu.fit.bachelors.dashboard.dto.group.response.GroupsResponse

interface GroupFacade {
    /**
     * Создать группу.
     *
     * @param request запрос создания группы
     */
    fun createGroup(request: GroupCreationRequest)

    /**
     * Отредактировать группу.
     *
     * @param request запрос изменения группы
     */
    fun editGroup(request: GroupEditingRequest)

    /**
     * Удалить группу.
     *
     * @param id идентификатор группы
     */
    fun deleteGroup(id: Long)

    /**
     * Получить все доступные группы.
     *
     * @return все доступные пользователю группы
     */
    fun getAll(): GroupsResponse
}
