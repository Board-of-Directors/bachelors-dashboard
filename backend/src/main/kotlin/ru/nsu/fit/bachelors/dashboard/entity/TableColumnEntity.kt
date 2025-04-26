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
@Table(name = "table_column")
class TableColumnEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    @Column
    var name: String,
    @Column
    var hidden: Boolean = false,
    @Column
    var width: Long?,
    @Column
    var sequenceId: Long,
    @Column
    var isInsurance: Boolean,
    @Column
    @Enumerated(value = EnumType.STRING)
    var type: ColumnDataType,
    @ManyToOne
    @JoinColumn(name = "table_id")
    var table: FileEntity? = null,
    @OneToMany(mappedBy = "column", cascade = [CascadeType.ALL], orphanRemoval = true)
    var items: MutableList<TableItemEntity> = mutableListOf(),
)
