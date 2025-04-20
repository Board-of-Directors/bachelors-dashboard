package ru.nsu.fit.bachelors.dashboard.entity

import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.OneToMany
import jakarta.persistence.Table
import org.hibernate.annotations.CreationTimestamp
import java.time.Instant

@Entity
@Table(name = "task")
class TaskEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    @Column
    var name: String,
    @Column
    var description: String,
    @Column
    @Enumerated(EnumType.STRING)
    var status: TaskStatus,
    @Column
    var sequenceId: Long?,
    @Column
    var deadline: Instant?,
    @CreationTimestamp
    val created: Instant? = null,
    @OneToMany(mappedBy = "task", cascade = [CascadeType.ALL], orphanRemoval = true)
    val employeeTasks: MutableList<EmployeeTasksEntity> = mutableListOf(),
)
