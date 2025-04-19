package ru.nsu.fit.bachelors.dashboard.jobs

import lombok.RequiredArgsConstructor
import lombok.extern.slf4j.Slf4j
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component

@Slf4j
@Component
@RequiredArgsConstructor
class TableSynchronizationJob : ScheduledJob {
    @Override
    @Scheduled(cron = "0 * * * * *")
    override fun execute() {
        logger().info("Executed task to synchronize tables")
    }
}

inline fun <reified T> T.logger(): Logger = LoggerFactory.getLogger(T::class.java)
