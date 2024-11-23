package ru.nsu.fit.bachelors.dashboard.repository

import org.springframework.data.jpa.repository.JpaRepository
import ru.nsu.fit.bachelors.dashboard.entity.TableColumnEntity

interface ColumnRepository : JpaRepository<TableColumnEntity, Long>
