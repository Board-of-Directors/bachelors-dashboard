package ru.nsu.fit.bachelors.dashboard.service

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.entity.FileEntity
import ru.nsu.fit.bachelors.dashboard.entity.TableHistoryEntity
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
    /**
     * Посчитать разницу между старой и новой версией таблицы.
     * Опубликовать изменения.
     */
    override fun computeAndPublish(
        oldTable: FileEntity,
        newTable: FileEntity,
    ) {
        val changes = diffComputer.computeDiff(oldTable, newTable).map { it.toInternal(newTable) }
        tableHistoryRepository.saveAll(changes)
    }
}

private fun TableChangeDto.toInternal(table: FileEntity): TableHistoryEntity =
    TableHistoryEntity(
        operation = enumValueOrThrow(this.op),
        path = this.path,
        value = this.value,
        fromValue = this.fromValue,
        timestamp = Instant.now(),
        table = table,
    )
