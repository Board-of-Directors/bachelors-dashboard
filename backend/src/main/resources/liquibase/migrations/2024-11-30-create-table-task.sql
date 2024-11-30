CREATE TABLE task(
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL,
    created TIMESTAMP NOT NULL,
    deadline TIMESTAMP
);


comment on table task is 'Таблица задач для сотрудников';

comment on column task.id is 'Идентификатор задачи';
comment on column task.name is 'Название задачи';
comment on column task.description is 'Описание задачи';
comment on column task.status is 'Статус задачи';
comment on column task.created is 'Время создания задачи';
comment on column task.deadline is 'Время срока выполнения задачи';

create index task_status_idx on task(status);
