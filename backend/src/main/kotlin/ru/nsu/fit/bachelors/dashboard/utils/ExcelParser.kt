package ru.nsu.fit.bachelors.dashboard.utils

import org.apache.poi.ss.usermodel.Cell
import org.apache.poi.ss.usermodel.CellType
import org.apache.poi.ss.usermodel.Row
import org.apache.poi.xssf.usermodel.XSSFWorkbook
import org.springframework.stereotype.Component
import org.springframework.web.multipart.MultipartFile
import ru.nsu.fit.bachelors.dashboard.entity.ColumnDataType
import ru.nsu.fit.bachelors.dashboard.entity.TableColumnEntity
import ru.nsu.fit.bachelors.dashboard.entity.TableItemEntity
import ru.nsu.fit.bachelors.dashboard.entity.TableRowEntity

@Component
class ExcelParser {
    fun parse(file: MultipartFile): RowsAndColumns {
        val workbook = XSSFWorkbook(file.inputStream)
        val firstSheet = workbook.getSheetAt(0)
        val columns = firstSheet.first().mapIndexed { index, cell -> toColumns(index, cell) }
        val rows = firstSheet.drop(1).mapIndexed { index, row -> toRows(index, row) }

        return RowsAndColumns(rows = rows, columns = columns)
    }
}

private fun toRows(index: Int, row: Row) : TableRowEntity {
    return TableRowEntity(
        table = null,
        student = null,
        sequenceId = index.toLong(),
        items = row.toItems(),

    )
}

private fun Row.toItems() : List<TableItemEntity> {
    TODO("Not yet implemented")
}

private fun ExcelParser.toColumns(
    index: Int,
    cell: Cell,
): TableColumnEntity =
    TableColumnEntity(
        name = cell.stringCellValue,
        sequenceId = index.toLong(),
        width = 100L,
        type = cell.cellType.toInternal(),
        table = null,
    )

private fun CellType.toInternal() : ColumnDataType{
    return when(this) {
        CellType.NUMERIC -> ColumnDataType.NUMBER
        CellType.STRING -> ColumnDataType.STRING
        CellType._NONE -> TODO()
        CellType.FORMULA -> TODO()
        CellType.BLANK -> TODO()
        CellType.BOOLEAN -> TODO()
        CellType.ERROR -> TODO()
    }
}

data class RowsAndColumns(
    val rows: List<TableRowEntity>,
    val columns: List<TableColumnEntity>,
)
