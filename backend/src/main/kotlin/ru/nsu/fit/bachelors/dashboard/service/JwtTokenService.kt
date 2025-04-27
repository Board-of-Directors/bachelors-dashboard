package ru.nsu.fit.bachelors.dashboard.service

import io.jsonwebtoken.Claims
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.entity.EmployeeEntity
import ru.nsu.fit.bachelors.dashboard.entity.TokenEntity
import java.time.Instant
import java.util.*

@Service
class JwtTokenService : TokenService {
    override fun createRefreshToken(employee: EmployeeEntity): TokenEntity {
        val tokenUuid = UUID.randomUUID()
        val expireAt = Instant.now().plus(DEFAULT_REFRESH_TOKEN_DURATION)
        val claims = refreshClaims(employee, tokenUuid)
        return TokenEntity(
            uuid = tokenUuid,
            expireAt = expireAt,
            token = createToken(claims, expireAt),
        )
    }

    override fun parseToken(refreshToken: String): String {
        val parsedToken =
            Jwts
                .parser()
                .setSigningKey(secret)
                .parseClaimsJws(refreshToken)

        return parsedToken.body.subject
    }

    private fun refreshClaims(
        employee: EmployeeEntity,
        tokenUuid: UUID,
    ): Claims {
        val claims = Jwts.claims().setSubject(employee.email)
        claims.put("token", tokenUuid)
        return claims
    }

    override fun createAccessToken(employee: EmployeeEntity): TokenEntity {
        val tokenUuid = UUID.randomUUID()
        val expireAt = Instant.now().plus(DEFAULT_ACCESS_TOKEN_DURATION)
        val claims = accessClaims(employee)
        return TokenEntity(
            uuid = tokenUuid,
            expireAt = expireAt,
            token = createToken(claims, expireAt),
        )
    }

    private fun accessClaims(employee: EmployeeEntity): Claims {
        val claims = Jwts.claims().setSubject(employee.email)
        claims.put("employeeId", employee.id)
        return claims
    }

    private fun createToken(
        claims: Claims,
        expireAt: Instant,
    ): String {
        val now = Date()

        return Jwts
            .builder()
            .setClaims(claims)
            .setIssuedAt(now)
            .setExpiration(Date.from(expireAt))
            .signWith(SignatureAlgorithm.HS256, secret)
            .compact()
    }

    companion object {
        val DEFAULT_REFRESH_TOKEN_DURATION = java.time.Duration.ofDays(30)
        val DEFAULT_ACCESS_TOKEN_DURATION = java.time.Duration.ofHours(10)
        val secret = Base64.getEncoder().encodeToString("SECRET123".toByteArray())
    }
}
