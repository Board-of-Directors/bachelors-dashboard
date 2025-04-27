package ru.nsu.fit.bachelors.dashboard.facade

import jakarta.servlet.http.Cookie
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.stereotype.Component

@Component
class JwtTokenFacadeImpl(
    private val request: HttpServletRequest,
    private val response: HttpServletResponse,
) : JwtTokenFacade {
    override fun clean() {
        request.session.invalidate()
        response.headerNames.remove(HEADER_AUTH)
        findCookie()?.maxAge = EXPIRED_COOKIE
    }

    private fun findCookie(): Cookie? {
        val cookies: Array<Cookie>? = request.cookies
        if (cookies != null) {
            return cookies.singleOrNull { it.name == TOKEN_COOKIE_NAME }
        }
        return null
    }

    companion object {
        const val TOKEN_COOKIE_NAME: String = "refreshToken"
        const val HEADER_AUTH: String = "Authorization"
        const val EXPIRED_COOKIE: Int = 0
    }
}
