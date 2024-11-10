package ru.nsu.fit.bachelors.dashboard.filter

import org.springframework.data.jpa.domain.Specification

interface InternalFilter<T> {
    /**
     * Преобразовать внутренний фильтр в спецификацию.
     *
     * @return спецификация
     */
    fun toSpecification(): Specification<T>
}
