package ru.nsu.fit.bachelors.dashboard.service

import ru.nsu.fit.bachelors.dashboard.entity.FileEntity
import ru.nsu.fit.bachelors.dashboard.entity.GroupEntity

interface FileService {
    /**
     * Получить все файлы, относящиеся к группе.
     *
     * @param group сущность группы
     * @return все файлы, которые относятся к группе
     */
    fun allByGroup(group: GroupEntity): List<FileEntity>

    /**
     * Получить файл по идентификатору.
     *
     * @param fileId идентификатор файла
     * @return детальная информация о файле
     */
    fun getById(fileId: Long): FileEntity
}
