package ru.nsu.fit.bachelors.dashboard.entity

import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToMany
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
    var externalId: String?,
    @Column
    @Enumerated(value = EnumType.STRING)
    var type: FileType,
    @Column
    var sequenceId: Int,
    @ManyToOne
    @JoinColumn(name = "group_id")
    var group: GroupEntity,
    @OneToMany(mappedBy = "table", cascade = [CascadeType.ALL])
    val rows: List<TableRowEntity> = listOf(),
    @OneToMany(mappedBy = "table", cascade = [CascadeType.ALL])
    val columns: List<TableColumnEntity> = listOf(),
)
