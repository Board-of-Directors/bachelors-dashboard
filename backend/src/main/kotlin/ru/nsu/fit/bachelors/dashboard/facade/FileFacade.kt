package ru.nsu.fit.bachelors.dashboard.facade

import org.springframework.web.multipart.MultipartFile
import ru.nsu.fit.bachelors.dashboard.dto.file.request.FileOrderRequest
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FileDetailResponse
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FilesResponse
import java.util.UUID

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

    /**
     * Загрузить файл.
     *
     * @param file файл для загрузки
     * @return идентификатор загруженного файла
     */
    fun uploadFile(file: MultipartFile): UUID

    /**
     * Получить все файлы по типу.
     *
     * @param fileType тип файла (документ/таблица)
     * @return ответ, содержащий все файлы с заданным типом
     */
    fun getByType(fileType: String): FilesResponse

    /**
     * Создать документ.
     */
    fun createDocument(request: DocumentCreationRequest)

    /**
     * Загрузить таблицу.
     */
    fun uploadTable(file: MultipartFile)
}
