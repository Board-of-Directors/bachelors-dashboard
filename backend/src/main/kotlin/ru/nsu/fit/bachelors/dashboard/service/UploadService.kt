package ru.nsu.fit.bachelors.dashboard.service

import org.springframework.web.multipart.MultipartFile
import java.util.UUID

interface UploadService {
    /**
     * Загрузить файл в хранилище.
     *
     * @param file файл для загрузки
     * @return путь до загруженного файла
     */
    fun upload(file: MultipartFile): UUID
}
