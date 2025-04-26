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
    var table: FileEntity? = null,
    @ManyToOne
    @JoinColumn(name = "student_id")
    val student: StudentEntity? = null,
    @OneToMany(mappedBy = "row", cascade = [CascadeType.ALL], orphanRemoval = true)
    val items: MutableList<TableItemEntity> = mutableListOf(),
) {
    fun addItems(items: List<TableItemEntity>): TableRowEntity {
        this.items.addAll(items)
        items.forEach { it.row = this }
        return this
    }
}
