package ru.nsu.fit.bachelors.dashboard.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table
import lombok.Getter
import lombok.Setter
import lombok.experimental.Accessors

@Entity
@Table(name = "file_group")
@Getter
@Setter
@Accessors(chain = true)
class GroupEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    var name: String,
)
