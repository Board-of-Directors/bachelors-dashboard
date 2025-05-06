package ru.nsu.fit.bachelors.dashboard

import com.fasterxml.jackson.databind.ObjectMapper
import com.github.springtestdbunit.DbUnitTestExecutionListener
import io.zonky.test.db.AutoConfigureEmbeddedDatabase
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.boot.test.mock.mockito.ResetMocksTestExecutionListener
import org.springframework.http.MediaType
import org.springframework.mock.web.MockMultipartFile
import org.springframework.test.context.TestExecutionListeners
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.ResultActions
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import ru.nsu.fit.bachelors.dashboard.config.ClearDatabaseTestExecutionListener
import ru.nsu.fit.bachelors.dashboard.configuration.UniqueIdentifierGenerator
import ru.nsu.fit.bachelors.dashboard.service.EmailService

@SpringBootTest
@TestExecutionListeners(
    ClearDatabaseTestExecutionListener::class,
    DependencyInjectionTestExecutionListener::class,
    DbUnitTestExecutionListener::class,
    ResetMocksTestExecutionListener::class,
)
@MockBean(
    UniqueIdentifierGenerator::class,
    EmailService::class,
)
@AutoConfigureEmbeddedDatabase
@AutoConfigureMockMvc
abstract class AbstractApplicationTest {
    @Autowired
    protected lateinit var mockMvc: MockMvc

    var objectMapper: ObjectMapper = ObjectMapper()

    protected fun <Res> okGet(
        path: String,
        response: Res,
    ): ResultActions =
        mockMvc
            .perform(getRequest(path))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.content().json(objectMapper.writeValueAsString(response)))

    protected fun <Req> okPut(
        path: String,
        request: Req,
    ): ResultActions =
        mockMvc
            .perform(putRequest(path, request))
            .andExpect(MockMvcResultMatchers.status().isOk)

    protected fun <Req> okPost(
        path: String,
        request: Req,
    ): ResultActions =
        mockMvc
            .perform(postRequest(path, request))
            .andExpect(MockMvcResultMatchers.status().isOk)

    protected fun okPostFile(
        path: String,
        filePath: String,
    ): ResultActions {
        val input = Thread.currentThread().getContextClassLoader().getResourceAsStream(filePath)!!
        val file = MockMultipartFile("file", filePath, MediaType.MULTIPART_FORM_DATA_VALUE, input)
        return mockMvc
            .perform(
                MockMvcRequestBuilders.multipart(path).file(file),
            ).andExpect { MockMvcResultMatchers.status().isOk }
    }

    protected fun okDelete(path: String): ResultActions =
        mockMvc
            .perform(deleteRequest(path))
            .andExpect(MockMvcResultMatchers.status().isOk)

    protected fun deleteRequest(path: String): MockHttpServletRequestBuilder =
        MockMvcRequestBuilders
            .delete(path)
            .accept(MediaType.APPLICATION_JSON)
            .contentType(MediaType.APPLICATION_JSON)

    protected fun <T> putRequest(
        path: String,
        content: T,
    ): MockHttpServletRequestBuilder =
        MockMvcRequestBuilders
            .put(path)
            .accept(MediaType.APPLICATION_JSON)
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(content))

    protected fun <T> postRequest(
        path: String,
        content: T,
    ): MockHttpServletRequestBuilder =
        MockMvcRequestBuilders
            .post(path)
            .accept(MediaType.APPLICATION_JSON)
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(content))

    protected fun getRequest(path: String): MockHttpServletRequestBuilder =
        MockMvcRequestBuilders
            .get(path)
            .accept(MediaType.APPLICATION_JSON)
            .contentType(MediaType.APPLICATION_JSON)

    companion object {
        const val PARAMETERIZED_TEST_NAME: String = "{0}"
    }
}
