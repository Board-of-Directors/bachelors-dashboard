package ru.nsu.fit.bachelors.dashboard.configuration

import lombok.RequiredArgsConstructor
import lombok.extern.slf4j.Slf4j
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.Customizer
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.builders.WebSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.web.SecurityFilterChain
import org.springframework.web.cors.CorsConfiguration

@Slf4j
@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
class SecurityConfiguration {
    @Bean
    @Throws(Exception::class)
    fun filterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .cors {
                it.configurationSource {
                    val configuration = CorsConfiguration()
                    configuration.allowedMethods = ALLOWED_METHODS
                    configuration.allowCredentials = true
                    configuration.setAllowedOriginPatterns(ALLOWED_ALL)
                    configuration.allowedHeaders = ALLOWED_ALL
                    configuration
                }
            }.authorizeHttpRequests { it.anyRequest().permitAll() }
            .httpBasic(Customizer.withDefaults())
            .csrf { it.disable() }
        return http.build()
    }

    @Bean
    fun webSecurityCustomizer() = WebSecurity::ignoring

    companion object {
        private val ALLOWED_METHODS = listOf("PUT", "POST", "DELETE", "GET", "OPTIONS", "PATCH")
        private val ALLOWED_ALL = listOf("*")
    }
}
