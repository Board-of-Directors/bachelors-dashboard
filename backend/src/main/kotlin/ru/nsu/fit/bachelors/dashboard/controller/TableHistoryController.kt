package ru.nsu.fit.bachelors.dashboard.controller

import io.swagger.v3.oas.annotations.Operation
import lombok.RequiredArgsConstructor
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import ru.nsu.fit.bachelors.dashboard.dto.history.response.TableHistoryResponse
import ru.nsu.fit.bachelors.dashboard.facade.TableHistoryFacade

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/history")
class TableHistoryController(
    private val historyFacade: TableHistoryFacade,
) {
    @Operation(description = "Получить списки изменений с группировкой по таблицам.")
    @GetMapping("/by-table")
    fun byTable(): List<TableHistoryResponse> = historyFacade.getAllByTable()

    @Operation(description = "Получить список изменений по конкретной таблице")
    @GetMapping("by-table-id")
    fun byTableId(
        @RequestParam id: Long,
    ) = historyFacade.getByTable(id)
}
