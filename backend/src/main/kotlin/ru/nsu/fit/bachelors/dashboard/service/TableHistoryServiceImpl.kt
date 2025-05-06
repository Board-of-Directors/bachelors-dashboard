package ru.nsu.fit.bachelors.dashboard.service

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.entity.FileEntity
import ru.nsu.fit.bachelors.dashboard.entity.HistoryTable
import ru.nsu.fit.bachelors.dashboard.entity.OperationType
import ru.nsu.fit.bachelors.dashboard.entity.TableHistoryEntity
import ru.nsu.fit.bachelors.dashboard.entity.toHistory
import ru.nsu.fit.bachelors.dashboard.repository.TableHistoryRepository
import ru.nsu.fit.bachelors.dashboard.utils.JsonDiffComputer
import ru.nsu.fit.bachelors.dashboard.utils.TableChangeDto
import ru.nsu.fit.bachelors.dashboard.utils.enumValueOrThrow
import java.time.Instant

@Service
@RequiredArgsConstructor
class TableHistoryServiceImpl(
    private val diffComputer: JsonDiffComputer,
    private val tableHistoryRepository: TableHistoryRepository,
) : TableHistoryService {
    override fun computeAndPublish(
        oldTable: FileEntity,
        newTable: FileEntity,
    ) {
        newTable.addChanges(
            diffComputer
                .computeDiff(oldTable.toHistory(), newTable.toHistory())
                .filter { OperationType.entries.map { it.toString() }.contains(it.op.uppercase()) }
                .map { it.toInternal() },
        )
    }

    override fun getAll(): List<TableHistoryEntity> = tableHistoryRepository.findAll()
}

private fun FileEntity.toHistory(): HistoryTable = HistoryTable(table = this.columns.toHistory() + this.rows.map { it.toHistory() })

private fun TableChangeDto.toInternal(): TableHistoryEntity =
    TableHistoryEntity(
        operation = enumValueOrThrow(this.op.uppercase()),
        path = this.path,
        value = this.value!!,
        fromValue = this.fromValue,
        timestamp = Instant.now(),
    )
