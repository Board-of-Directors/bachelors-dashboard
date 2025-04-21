package ru.nsu.fit.bachelors.dashboard.utils

import org.apache.poi.ss.usermodel.Cell
import org.apache.poi.ss.usermodel.CellType
import org.apache.poi.ss.usermodel.Row
import org.apache.poi.xssf.usermodel.XSSFWorkbook
import org.springframework.stereotype.Component
import org.springframework.web.multipart.MultipartFile
import ru.nsu.fit.bachelors.dashboard.entity.ColumnDataType
import ru.nsu.fit.bachelors.dashboard.entity.FileEntity
import ru.nsu.fit.bachelors.dashboard.entity.FileType
import ru.nsu.fit.bachelors.dashboard.entity.TableColumnEntity
import ru.nsu.fit.bachelors.dashboard.entity.TableItemEntity
import ru.nsu.fit.bachelors.dashboard.entity.TableRowEntity

@Component
class ExcelParser {
    fun parse(file: MultipartFile): FileEntity {
        val workbook = XSSFWorkbook(file.inputStream)
        val firstSheet = workbook.getSheetAt(0)
        val columns = firstSheet.first().mapIndexed { index, cell -> toColumns(index, cell) }
        val rows = firstSheet.drop(1).mapIndexed { index, row -> toRows(index, row, columns) }

        return FileEntity(type = FileType.TABLE, sequenceId = 1, group = null, name = file.name)
            .addRows(rows)
            .addColumns(columns)
    }
}

private fun toRows(index: Int, tableRow: Row, columns: List<TableColumnEntity>): TableRowEntity {
    val row = TableRowEntity(sequenceId = index.toLong())
    return row.addItems(tableRow.toItems(columns))
}

private fun Row.toItems(columns: List<TableColumnEntity>): List<TableItemEntity> {
    val columnsByIndex = columns.associateBy { it.sequenceId }
    return this.mapIndexed { index, cell ->
        TableItemEntity(
            column = columnsByIndex[index.toLong()],
            value = cell.extractValue()
        )
    }
}

private fun ExcelParser.toColumns(
    index: Int,
    cell: Cell,
): TableColumnEntity =
    TableColumnEntity(
        name = cell.extractValue(),
        sequenceId = index.toLong(),
        width = 100L,
        type = cell.cellType.toInternal(),
    )

private fun Cell.extractValue(): String {
    return when (this.cellType) {
        CellType._NONE -> TODO()
        CellType.NUMERIC -> this.numericCellValue.toString()
        CellType.STRING -> this.stringCellValue
        CellType.FORMULA -> TODO()
        CellType.BLANK -> this.stringCellValue
        CellType.BOOLEAN -> TODO()
        CellType.ERROR -> TODO()
    }
}

private fun CellType.toInternal(): ColumnDataType {
    return when (this) {
        CellType.NUMERIC -> ColumnDataType.NUMBER
        CellType.STRING, CellType.BLANK -> ColumnDataType.STRING
        CellType._NONE -> TODO()
        CellType.FORMULA -> TODO()
        CellType.BOOLEAN -> TODO()
        CellType.ERROR -> TODO()
    }
}

data class RowsAndColumns(
    val rows: List<TableRowEntity>,
    val columns: List<TableColumnEntity>,
)
