package ru.nsu.fit.bachelors.dashboard.facade

import ru.nsu.fit.bachelors.dashboard.dto.file.request.FileOrderRequest
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FileDetailResponse
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FilesResponse

interface FileFacade {
    /**
     * Получить все файлы по родительской группе.
     *
     * @param groupId идентификатор родительской группы
     * @return ответ, содержащий все файлы внутри группы
     */
    fun getByGroup(groupId: Long): FilesResponse

    /**
     * Получить детальную информацию о файле.
     *
     * @param fileId идентификатор файла
     * @return ответ, содержащий детальную информацию о файле
     */
    fun getDetail(fileId: Long): FileDetailResponse

    /**
     * Изменить порядок файлов.
     *
     * @param fileOrderRequest запрос, содержащий новый порядок файлов
     */
    fun changeOrder(fileOrderRequest: FileOrderRequest)
}
