package ru.nsu.fit.bachelors.dashboard.controller

import lombok.RequiredArgsConstructor
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import ru.nsu.fit.bachelors.dashboard.dto.row.request.ChangeRowRequest
import ru.nsu.fit.bachelors.dashboard.facade.RowFacade

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/row")
class RowController(
    private val rowFacade: RowFacade,
) {
    @PutMapping("/change")
    fun changeRow(
        @RequestBody changeRowRequest: ChangeRowRequest,
    ) {
        rowFacade.changeRow(changeRowRequest)
    }
}
