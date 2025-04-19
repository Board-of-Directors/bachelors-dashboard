package ru.nsu.fit.bachelors.dashboard.jobs

interface ScheduledJob {
    /**
     * Исполнить обработку.
     */
    fun execute()
}
