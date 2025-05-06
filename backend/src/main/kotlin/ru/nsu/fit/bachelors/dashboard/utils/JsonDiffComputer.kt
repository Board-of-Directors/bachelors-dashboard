package ru.nsu.fit.bachelors.dashboard.utils

import com.fasterxml.jackson.core.type.TypeReference
import com.fasterxml.jackson.databind.ObjectMapper
import com.flipkart.zjsonpatch.DiffFlags
import com.flipkart.zjsonpatch.JsonDiff
import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.entity.HistoryTable
import java.util.*

@Component
@RequiredArgsConstructor
class JsonDiffComputer(
    private val objectMapper: ObjectMapper,
) {
    fun computeDiff(
        oldTable: HistoryTable,
        newTable: HistoryTable,
    ): List<TableChangeDto> {
        val diff =
            JsonDiff.asJson(
                objectMapper.valueToTree(oldTable),
                objectMapper.valueToTree(newTable),
                JSON_DIFF_FLAGS,
            )
        val typeRef: TypeReference<List<TableChangeDto>> = object : TypeReference<List<TableChangeDto>>() {}
        if (diff.isEmpty) {
            return listOf()
        }
        return objectMapper.treeToValue(diff, typeRef)
    }

    companion object {
        val JSON_DIFF_FLAGS: EnumSet<DiffFlags?> =
            EnumSet.of<DiffFlags?>(
                DiffFlags.ADD_ORIGINAL_VALUE_ON_REPLACE,
            )
    }
}

data class TableChangeDto(
    val op: String,
    val path: String,
    val value: String?,
    val fromValue: String?,
)
