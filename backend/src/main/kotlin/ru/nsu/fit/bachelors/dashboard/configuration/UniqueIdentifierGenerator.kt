package ru.nsu.fit.bachelors.dashboard.configuration

import org.springframework.stereotype.Component
import java.util.UUID

@Component
class UniqueIdentifierGenerator {
    fun generate(): UUID = UUID.randomUUID()
}
