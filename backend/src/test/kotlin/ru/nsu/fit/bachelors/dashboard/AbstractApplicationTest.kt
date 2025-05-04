package ru.nsu.fit.bachelors.dashboard

import com.fasterxml.jackson.core.type.TypeReference
import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import com.github.springtestdbunit.DbUnitTestExecutionListener
import io.zonky.test.db.AutoConfigureEmbeddedDatabase
import jakarta.annotation.Nonnull
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.ResetMocksTestExecutionListener
import org.springframework.http.MediaType
import org.springframework.test.context.TestExecutionListeners
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.ResultActions
import org.springframework.test.web.servlet.ResultMatcher
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import ru.nsu.fit.bachelors.dashboard.config.ClearDatabaseTestExecutionListener
import java.io.IOException

@SpringBootTest
@TestExecutionListeners(
    ClearDatabaseTestExecutionListener::class,
    DependencyInjectionTestExecutionListener::class,
    DbUnitTestExecutionListener::class,
    ResetMocksTestExecutionListener::class,
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

    @Nonnull
    @Throws(IOException::class)
    protected fun mapFromJson(path: String?): MutableMap<String?, Any?>? {
        val input = Thread.currentThread().getContextClassLoader().getResourceAsStream(path)
        return objectMapper.readValue<MutableMap<String?, Any?>?>(
            input,
            object : TypeReference<MutableMap<String?, Any?>?>() {
            },
        )
    }

    @Nonnull
    @Throws(IOException::class)
    protected fun jsonFromPath(path: String?): ResultMatcher? {
        val input = Thread.currentThread().getContextClassLoader().getResourceAsStream(path)
        val node: JsonNode? = objectMapper.readTree(input)
        val text: String = objectMapper.writeValueAsString(node)
        return MockMvcResultMatchers.content().json(text)
    }

    @Nonnull
    @Throws(IOException::class)
    protected fun putJsonBody(
        path: String,
        bodyPath: String?,
    ): MockHttpServletRequestBuilder? {
        val input = Thread.currentThread().getContextClassLoader().getResourceAsStream(bodyPath)
        val node: JsonNode? = objectMapper.readTree(input)
        val text: String = objectMapper.writeValueAsString(node)
        return MockMvcRequestBuilders.put(path).contentType(MediaType.APPLICATION_JSON).content(text)
    }

    @Nonnull
    @Throws(IOException::class)
    protected fun postJsonBody(
        path: String,
        bodyPath: String?,
    ): MockHttpServletRequestBuilder? {
        val input = Thread.currentThread().getContextClassLoader().getResourceAsStream(bodyPath)
        val node: JsonNode? = objectMapper.readTree(input)
        val text: String = objectMapper.writeValueAsString(node)
        return MockMvcRequestBuilders.post(path).contentType(MediaType.APPLICATION_JSON).content(text)
    }

    @Nonnull
    @Throws(IOException::class)
    protected fun deleteJsonBody(
        path: String,
        bodyPath: String?,
    ): MockHttpServletRequestBuilder? {
        val input = Thread.currentThread().getContextClassLoader().getResourceAsStream(bodyPath)
        val node: JsonNode? = objectMapper.readTree(input)
        val text: String = objectMapper.writeValueAsString(node)
        return MockMvcRequestBuilders.delete(path).contentType(MediaType.APPLICATION_JSON).content(text)
    }

    @Nonnull
    @Throws(IOException::class)
    protected fun <T> getResourceAsStreamFromClasspath(
        path: String?,
        typeClass: Class<T?>?,
    ): T? {
        val input = Thread.currentThread().getContextClassLoader().getResourceAsStream(path)
        return objectMapper.readValue<T?>(input, typeClass)
    }

    companion object {
        const val PARAMETERIZED_TEST_NAME: String = "{0}"
    }
}
