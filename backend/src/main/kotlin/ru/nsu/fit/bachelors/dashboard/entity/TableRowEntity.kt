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
@Table(name = "table_row")
class TableRowEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    @Column
    @Enumerated(value = EnumType.STRING)
    var color: RowColor = RowColor.WHITE,
    @Column
    var sequenceId: Long,
    @ManyToOne
    @JoinColumn(name = "table_id")
    val table: FileEntity,
    @ManyToOne
    @JoinColumn(name = "student_id")
    val student: StudentEntity,
    @OneToMany(mappedBy = "row", cascade = [CascadeType.ALL])
    val items: List<TableItemEntity> = listOf(),
)
