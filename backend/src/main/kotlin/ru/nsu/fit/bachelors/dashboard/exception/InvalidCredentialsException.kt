package ru.nsu.fit.bachelors.dashboard.exception

import org.springframework.http.HttpStatus

data class InvalidCredentialsException(
    override val message: String = "Данные были введены неверно.",
) : BaseException(HttpStatus.BAD_REQUEST, message)
