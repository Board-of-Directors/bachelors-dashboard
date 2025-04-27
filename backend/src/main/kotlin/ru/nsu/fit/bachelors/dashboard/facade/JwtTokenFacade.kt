package ru.nsu.fit.bachelors.dashboard.facade

interface JwtTokenFacade {
    /**
     * Очистить данные о текущей сессии.
     */
    fun clean()
}
