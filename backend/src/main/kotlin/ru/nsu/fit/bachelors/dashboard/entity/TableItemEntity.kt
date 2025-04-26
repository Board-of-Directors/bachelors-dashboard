package ru.nsu.fit.bachelors.dashboard.entity

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table

@Entity
@Table(name = "table_item")
class TableItemEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    @ManyToOne
    @JoinColumn(name = "row_id")
    var row: TableRowEntity? = null,
    @ManyToOne
    @JoinColumn(name = "column_id")
    var column: TableColumnEntity? = null,
    @Column
    val value: String,
) {
    fun setColumn(column: TableColumnEntity?): TableItemEntity {
        // column?.items?.add(this)
        this.column = column
        return this
    }
}
