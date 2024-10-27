create table file
(
    id              BIGSERIAL PRIMARY KEY,
    name            TEXT NOT NULL,
    type            TEXT NOT NULL
);

comment on table file is 'Таблица файлов';

comment on column file.id is 'Идентификатор файла';
comment on column file.name is 'Название файла';
