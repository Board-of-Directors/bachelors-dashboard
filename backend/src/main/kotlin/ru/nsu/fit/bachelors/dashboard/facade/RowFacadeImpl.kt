package ru.nsu.fit.bachelors.dashboard.facade

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Transactional
import ru.nsu.fit.bachelors.dashboard.dto.row.request.ChangeRowRequest
import ru.nsu.fit.bachelors.dashboard.service.RowService
import ru.nsu.fit.bachelors.dashboard.utils.enumValueOrThrow

@Component
@RequiredArgsConstructor
class RowFacadeImpl(
    private val rowService: RowService,
) : RowFacade {
    @Transactional
    override fun changeRow(changeRowRequest: ChangeRowRequest) {
        val row = rowService.getById(changeRowRequest.rowId)
        row.color = enumValueOrThrow(changeRowRequest.color)
    }
}
