package ru.nsu.fit.bachelors.dashboard.repository

import org.springframework.data.jpa.repository.JpaRepository
import ru.nsu.fit.bachelors.dashboard.entity.GroupEntity

interface GroupRepository : JpaRepository<GroupEntity, Long>
