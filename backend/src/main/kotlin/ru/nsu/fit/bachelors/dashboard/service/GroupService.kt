package ru.nsu.fit.bachelors.dashboard.service

import ru.nsu.fit.bachelors.dashboard.entity.GroupEntity

interface GroupService {
    /**
     * Сохранить группу.
     *
     * @param group группа для сохранения
     */
    fun save(group: GroupEntity)

    /**
     * Удалить группу.
     *
     * @param group группа для удаления
     */
    fun delete(group: GroupEntity)

    /**
     * Получить группу по идентификатору.
     *
     * @param id идентификатор группы
     */
    fun get(id: Long): GroupEntity

    /**
     * Получить все доступные группы.
     *
     * @return список доступных групп
     */
    fun getAll(): List<GroupEntity>
}
