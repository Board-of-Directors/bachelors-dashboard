package ru.nsu.fit.bachelors.dashboard.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import ru.nsu.fit.bachelors.dashboard.entity.StudentEntity

interface StudentRepository :
    JpaRepository<StudentEntity, Long>,
    JpaSpecificationExecutor<StudentEntity>
