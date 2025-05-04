package ru.nsu.fit.bachelors.dashboard.service

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.entity.EmployeeEntity

@Service
@RequiredArgsConstructor
class NotificationServiceImpl(
    private val emailService: EmailService,
) : NotificationService {
    override fun notifyRegistration(
        employeeEntity: EmployeeEntity,
        rawPassword: String,
    ) {
        emailService.send(
            message = "Ваш пароль $rawPassword от аккаунта с адрес электронной почты ${employeeEntity.email}",
            email = employeeEntity.email,
        )
    }
}
