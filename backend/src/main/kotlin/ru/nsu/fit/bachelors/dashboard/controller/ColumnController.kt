package ru.nsu.fit.bachelors.dashboard.controller

import lombok.RequiredArgsConstructor
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import ru.nsu.fit.bachelors.dashboard.dto.column.request.ChangeColumnRequest
import ru.nsu.fit.bachelors.dashboard.facade.ColumnFacade

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/column")
class ColumnController(
    private val columnFacade: ColumnFacade,
) {
    @PutMapping("/change")
    fun changeColumn(@RequestBody changeColumnRequest: ChangeColumnRequest) = columnFacade.changeColumn(changeColumnRequest)
}
