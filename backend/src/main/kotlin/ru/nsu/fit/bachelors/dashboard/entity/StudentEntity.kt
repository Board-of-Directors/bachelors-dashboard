package ru.nsu.fit.bachelors.dashboard.entity

import jakarta.persistence.CascadeType
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.OneToMany
import jakarta.persistence.Table

@Entity
@Table(name = "student")
class StudentEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    val insurance: String,
    val fullName: String,
    @OneToMany(mappedBy = "student", cascade = [CascadeType.ALL])
    val mentions: MutableList<TableRowEntity> = mutableListOf(),
) {
    fun addMention(mention: TableRowEntity) {
        mentions.add(mention)
        mention.student = this
    }
}
