package ru.nsu.fit.bachelors.dashboard.configuration.properties

import com.amazonaws.auth.AWSCredentials
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.stereotype.Component

@Component
@ConfigurationProperties(prefix = "amazon.s3")
data class AmazonProperties(
    var accessKey: String? = null,
    var secretKey: String? = null,
    var serviceEndpoint: String? = null,
    var signingRegion: String? = null,
) : AWSCredentials {
    override fun getAWSAccessKeyId() = accessKey

    override fun getAWSSecretKey() = secretKey
}
