package ru.nsu.fit.bachelors.dashboard.utils

import java.time.Instant
import java.time.LocalDate
import java.time.ZoneOffset

fun parseDate(date: String?): Instant? = date?.let { LocalDate.parse(it) }?.atStartOfDay()?.toInstant(ZoneOffset.UTC)
