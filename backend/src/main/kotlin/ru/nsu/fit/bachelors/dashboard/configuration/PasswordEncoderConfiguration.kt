package ru.nsu.fit.bachelors.dashboard.configuration

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder

@Configuration
class PasswordEncoderConfiguration {
    @Bean
    @ConditionalOnProperty(value = ["encoding.enable"], havingValue = "true", matchIfMissing = true)
    fun passwordEncoder(): PasswordEncoder = BCryptPasswordEncoder()

    @Bean
    @ConditionalOnProperty(value = ["encoding.enable"], havingValue = "false", matchIfMissing = false)
    fun dummyEncoder(): PasswordEncoder = DummyEncoder()

    private class DummyEncoder : PasswordEncoder {
        override fun encode(rawPassword: CharSequence?): String? = rawPassword.toString()

        override fun matches(
            rawPassword: CharSequence?,
            encodedPassword: String?,
        ): Boolean = rawPassword?.equals(encodedPassword) == true
    }
}
