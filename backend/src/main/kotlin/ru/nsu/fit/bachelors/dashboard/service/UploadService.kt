package ru.nsu.fit.bachelors.dashboard.service

import org.springframework.web.multipart.MultipartFile
import java.io.InputStream
import java.util.UUID

interface UploadService {
    /**
     * Загрузить файл в хранилище.
     *
     * @param file файл для загрузки
     * @return путь до загруженного файла
     */
    fun upload(file: MultipartFile): UUID

    /**
     * Получить файл из хранилища.
     *
     * @param id идентификатор файла
     */
    fun get(id: String): InputStream
}
