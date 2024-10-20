package ru.nsu.fit.bachelors.dashboard.entity

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "file")
class FileEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    @Column
    var name: String,
    @Column
    @Enumerated(value = EnumType.STRING)
    var type: FileType,
    @Column
    var sequenceId: Int,
)
