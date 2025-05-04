package ru.nsu.fit.bachelors.dashboard.config

import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.test.context.TestContext
import org.springframework.test.context.support.AbstractTestExecutionListener

class ClearDatabaseTestExecutionListener : AbstractTestExecutionListener() {
    override fun beforeTestMethod(testContext: TestContext) {
        val jdbcTemplate = testContext.applicationContext.getBean(JdbcTemplate::class.java)
        jdbcTemplate.execute("TRUNCATE TABLE file_group, employee_tasks CASCADE")
    }
}
