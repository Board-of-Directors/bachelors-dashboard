CREATE TABLE employee_tasks(
    id BIGSERIAL PRIMARY KEY,
    employee_id BIGINT NOT NULL REFERENCES employee(id),
    task_id BIGINT NOT NULL REFERENCES task(id)
);


CREATE INDEX employee_tasks_employee_id_idx on employee_tasks(employee_id);
CREATE INDEX employee_tasks_task_id_idx on employee_tasks(task_id);
