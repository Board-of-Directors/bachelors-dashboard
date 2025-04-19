package ru.nsu.fit.bachelors.dashboard

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.scheduling.annotation.EnableScheduling

@SpringBootApplication
@EnableScheduling
class BachelorsDashboardApplication

fun main(args: Array<String>) {
    runApplication<BachelorsDashboardApplication>(*args)
}
