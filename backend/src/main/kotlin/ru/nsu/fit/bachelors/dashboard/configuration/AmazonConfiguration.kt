package ru.nsu.fit.bachelors.dashboard.configuration

import com.amazonaws.auth.AWSStaticCredentialsProvider
import com.amazonaws.client.builder.AwsClientBuilder
import com.amazonaws.services.s3.AmazonS3
import com.amazonaws.services.s3.AmazonS3ClientBuilder
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import ru.nsu.fit.bachelors.dashboard.configuration.properties.AmazonProperties

@Configuration
class AmazonConfiguration {
    @Bean
    fun amazonClient(amazonProperties: AmazonProperties): AmazonS3 =
        AmazonS3ClientBuilder
            .standard()
            .withCredentials(AWSStaticCredentialsProvider(amazonProperties))
            .withEndpointConfiguration(
                AwsClientBuilder.EndpointConfiguration(
                    amazonProperties.serviceEndpoint,
                    amazonProperties.signingRegion,
                ),
            ).build()
}
