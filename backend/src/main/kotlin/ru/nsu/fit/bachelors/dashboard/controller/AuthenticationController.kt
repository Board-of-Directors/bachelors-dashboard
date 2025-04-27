package ru.nsu.fit.bachelors.dashboard.controller

import io.swagger.v3.oas.annotations.Operation
import lombok.RequiredArgsConstructor
import org.springframework.web.bind.annotation.CookieValue
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import ru.nsu.fit.bachelors.dashboard.dto.auth.request.LoginRequest
import ru.nsu.fit.bachelors.dashboard.dto.auth.response.CredentialsResponse
import ru.nsu.fit.bachelors.dashboard.facade.AuthenticationFacade
import ru.nsu.fit.bachelors.dashboard.facade.JwtTokenFacade

@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
@RestController
class AuthenticationController(
    private val authenticationFacade: AuthenticationFacade,
    private val jwtTokenFacade: JwtTokenFacade,
) {
    @Operation(description = "Вход в аккаунт.")
    @PostMapping("/login")
    fun login(
        @RequestBody request: LoginRequest,
    ): CredentialsResponse = authenticationFacade.login(request)

    @Operation(description = "Обновить токен.")
    @PostMapping("/refresh")
    fun refresh(
        @CookieValue("refreshToken") refreshToken: String,
    ): CredentialsResponse = authenticationFacade.refresh(refreshToken)

    @Operation(description = "Выход из аккаунта.")
    @PostMapping("/logout")
    fun logout() {
        jwtTokenFacade.clean()
    }
}
