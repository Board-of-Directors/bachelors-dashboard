package ru.nsu.fit.bachelors.dashboard.filter

import org.springframework.data.jpa.domain.Specification
import ru.nsu.fit.bachelors.dashboard.entity.EmployeeEntity

data class EmployeeInternalFilter(
    private val email: String?,
) : InternalFilter<EmployeeEntity> {
    override fun toSpecification(): Specification<EmployeeEntity> =
        Specification { root, _, criteriaBuilder ->
            val predicates =
                listOfNotNull(
                    email?.let {
                        criteriaBuilder.equal(root.get<String>("email"), it)
                    },
                ).toTypedArray()
            criteriaBuilder.and(*predicates)
        }

}
