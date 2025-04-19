package ru.nsu.fit.bachelors.dashboard.service

import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.entity.EmployeeEntity
import ru.nsu.fit.bachelors.dashboard.entity.TokenEntity
import java.time.Instant
import java.util.*

@Service
class JwtTokenService : TokenService {
    /**
     * Создать токен обновления сессии для работника.
     */
    override fun createRefreshToken(employee: EmployeeEntity): TokenEntity {
        val token =
            TokenEntity(
                uuid = UUID.randomUUID().toString(),
                expireAt = Instant.now().plus(DEFAULT_TOKEN_DURATION),
                token = createToken(employee),
            )
    }

    private fun createToken(employee: EmployeeEntity): String {
        val now = Date()
        val validity: Date = Date(now.getTime() + DEFAULT_TOKEN_DURATION.toMillis())

        return Jwts
            .builder()
            .setClaims(claims)
            .setIssuedAt(now)
            .setExpiration(validity)
            .signWith(SignatureAlgorithm.HS256, secret)
            .compact()
    }

    companion object {
        val DEFAULT_TOKEN_DURATION = java.time.Duration.ofDays(1)
    }
}
