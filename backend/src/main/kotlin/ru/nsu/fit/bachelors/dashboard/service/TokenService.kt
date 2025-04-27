package ru.nsu.fit.bachelors.dashboard.service

import ru.nsu.fit.bachelors.dashboard.entity.EmployeeEntity
import ru.nsu.fit.bachelors.dashboard.entity.TokenEntity

interface TokenService {
    /**
     * Создать токен обновления сессии для работника.
     */
    fun createRefreshToken(employee: EmployeeEntity): TokenEntity

    /**
     * Создать токен доступа для работника.
     */
    fun createAccessToken(entity: EmployeeEntity): TokenEntity

    /**
     * Распарсить существующий токен.
     */
    fun parseToken(refreshToken: String): String
}
