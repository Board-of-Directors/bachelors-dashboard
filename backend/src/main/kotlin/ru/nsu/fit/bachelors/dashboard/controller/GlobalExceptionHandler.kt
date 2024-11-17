package ru.nsu.fit.bachelors.dashboard.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice
import ru.nsu.fit.bachelors.dashboard.exception.BaseException

@RestControllerAdvice
class GlobalExceptionHandler {
    @ExceptionHandler(BaseException::class)
    fun handleBase(exception: BaseException) = ResponseEntity.status(exception.status).body(exception.message)
}
