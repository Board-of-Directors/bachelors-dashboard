create table file_group
(
    id              BIGSERIAL PRIMARY KEY,
    name            TEXT NOT NULL
);

comment on table file_group is 'Таблица групп файлов';

comment on column file_group.id is 'Идентификатор группы';
comment on column file_group.name is 'Название группы';
