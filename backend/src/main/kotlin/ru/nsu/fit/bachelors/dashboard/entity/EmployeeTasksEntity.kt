package ru.nsu.fit.bachelors.dashboard.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table

@Entity
@Table(name = "employee_tasks")
class EmployeeTasksEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @ManyToOne
    @JoinColumn(name = "employee_id")
    val employee: EmployeeEntity,

    @ManyToOne
    @JoinColumn(name = "task_id")
    val task: TaskEntity,

)
