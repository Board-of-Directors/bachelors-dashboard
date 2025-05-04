package ru.nsu.fit.bachelors.dashboard.service

import jakarta.mail.Message
import jakarta.mail.internet.InternetAddress
import lombok.RequiredArgsConstructor
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.stereotype.Component

@Component
@RequiredArgsConstructor
class EmailServiceImpl(
    val mailSender: JavaMailSender,
) : EmailService {
    override fun send(
        message: String,
        email: String,
    ) {
        val mailMessage = mailSender.createMimeMessage()
        mailMessage.addRecipient(Message.RecipientType.TO, InternetAddress(email))
        mailMessage.setContent(message, "text/html; charset=UTF-8")
        mailSender.send(mailMessage)
    }
}
