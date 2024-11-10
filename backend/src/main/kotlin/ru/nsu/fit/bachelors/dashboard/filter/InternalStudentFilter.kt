package ru.nsu.fit.bachelors.dashboard.filter

import org.springframework.data.jpa.domain.Specification
import ru.nsu.fit.bachelors.dashboard.entity.StudentEntity

data class InternalStudentFilter(
    val insurance: String?,
    val fullName: String?,
) : InternalFilter<StudentEntity> {
    override fun toSpecification(): Specification<StudentEntity> =
        Specification { root, _, criteriaBuilder ->
            val predicates =
                listOfNotNull(
                    insurance?.let {
                        criteriaBuilder.equal(root.get<String>("insurance"), it)
                    },
                    fullName?.let {
                        criteriaBuilder.equal(root.get<String>("fullName"), it)
                    },
                ).toTypedArray()
            criteriaBuilder.and(*predicates)
        }
}
