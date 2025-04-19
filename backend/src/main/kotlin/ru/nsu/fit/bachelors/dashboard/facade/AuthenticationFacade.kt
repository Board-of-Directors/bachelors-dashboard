package ru.nsu.fit.bachelors.dashboard.facade

import ru.nsu.fit.bachelors.dashboard.dto.auth.request.LoginRequest
import ru.nsu.fit.bachelors.dashboard.dto.auth.response.CredentialsResponse

interface AuthenticationFacade {
    /**
     * Обработать данные для входа в аккаунт.
     *
     * @param request запрос входа в аккаунт
     */
    fun login(request: LoginRequest): CredentialsResponse
}
