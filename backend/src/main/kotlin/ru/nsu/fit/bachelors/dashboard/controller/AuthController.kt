package ru.nsu.fit.bachelors.dashboard.controller

import io.swagger.v3.oas.annotations.Operation
import lombok.RequiredArgsConstructor
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import ru.nsu.fit.bachelors.dashboard.dto.auth.request.LoginRequest
import ru.nsu.fit.bachelors.dashboard.facade.AuthenticationFacade

@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
@RestController
class AuthenticationController(
    private val authenticationFacade: AuthenticationFacade,
) {
    @Operation(description = "Вход в аккаунт.")
    @PostMapping("/login")
    fun login(
        @RequestBody request: LoginRequest,
    ) {
        authenticationFacade.login(request)
    }
}
