package ru.nsu.fit.bachelors.dashboard.service

import com.amazonaws.services.s3.AmazonS3
import com.amazonaws.services.s3.model.GetObjectRequest
import com.amazonaws.services.s3.model.ObjectMetadata
import lombok.extern.slf4j.Slf4j
import org.springframework.stereotype.Component
import org.springframework.web.multipart.MultipartFile
import java.io.IOException
import java.io.InputStream
import java.util.*

@Slf4j
@Component
class UploadServiceImpl(
    private val uploadClient: AmazonS3,
) : UploadService {
    override fun upload(file: MultipartFile): UUID {
        try {
            val objectMetadata = ObjectMetadata()
            objectMetadata.contentType = file.contentType
            objectMetadata.contentLength = file.size
            val path = UUID.randomUUID()
            uploadClient.putObject(
                BUCKET_NAME,
                path.toString(),
                file.inputStream,
                objectMetadata,
            )
            return path
        } catch (exception: IOException) {
            throw RuntimeException("Cannot upload file", exception)
        }
    }

    override fun get(id: String): InputStream {
        val request = GetObjectRequest(BUCKET_NAME, id)
        val response = uploadClient.getObject(request)
        return response.objectContent
    }

    companion object {
        const val BUCKET_NAME = "default-file-bucket"
        const val PREFIX = "https://storage.yandexcloud.net"
    }
}
