package ru.nsu.fit.bachelors.dashboard.utils

import com.fasterxml.jackson.core.type.TypeReference
import com.fasterxml.jackson.databind.ObjectMapper
import com.flipkart.zjsonpatch.JsonDiff
import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.entity.FileEntity

@Component
@RequiredArgsConstructor
class JsonDiffComputer(
    private val objectMapper: ObjectMapper,
) {
    fun computeDiff(
        oldTable: FileEntity,
        newTable: FileEntity,
    ): List<TableChangeDto> {
        val diff =
            JsonDiff.asJson(
                objectMapper.valueToTree(oldTable),
                objectMapper.valueToTree(newTable),
            )
        val typeRef: TypeReference<List<TableChangeDto>> = object : TypeReference<List<TableChangeDto>>() {}
        return objectMapper.treeToValue(diff, typeRef)
    }
}

data class TableChangeDto(
    val op: String,
    val path: String,
    val value: String,
    val fromValue: String?,
)
