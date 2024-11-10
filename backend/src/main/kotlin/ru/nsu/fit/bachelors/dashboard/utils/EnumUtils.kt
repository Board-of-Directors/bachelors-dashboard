package ru.nsu.fit.bachelors.dashboard.utils

inline fun <reified T : Enum<T>> enumValueOrThrow(elementName: String?): T {
    return enumValues<T>().firstOrNull { it.name == elementName }
        ?: error("No enum value matching $elementName")
}
