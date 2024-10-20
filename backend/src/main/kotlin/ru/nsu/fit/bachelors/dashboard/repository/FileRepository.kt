package ru.nsu.fit.bachelors.dashboard.repository

import org.springframework.data.jpa.repository.JpaRepository
import ru.nsu.fit.bachelors.dashboard.entity.FileEntity
import ru.nsu.fit.bachelors.dashboard.entity.GroupEntity

interface FileRepository : JpaRepository<FileEntity, Long> {
    fun findAllByGroup(group: GroupEntity): List<FileEntity>
}
