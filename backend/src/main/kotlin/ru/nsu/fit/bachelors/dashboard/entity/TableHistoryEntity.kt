package ru.nsu.fit.bachelors.dashboard.entity

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table
import java.time.Instant

@Entity
@Table(name = "table_history")
class TableHistoryEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,
    @ManyToOne
    @JoinColumn(name = "table_id")
    val table: FileEntity,
    @Column
    @Enumerated(EnumType.STRING)
    val operation: OperationType,
    @Column
    val path: String,
    @Column
    val value: String,
    @Column
    val fromValue: String?,
    @Column
    val timestamp: Instant,
)
