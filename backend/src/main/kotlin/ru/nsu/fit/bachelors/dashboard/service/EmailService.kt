package ru.nsu.fit.bachelors.dashboard.service

interface EmailService {
    /**
     * Отправить сообщение на указанный адрес электронной почты.
     *
     * @param message сообщение
     * @param email адрес электронной почты
     */
    fun send(
        message: String,
        email: String,
    )
}
