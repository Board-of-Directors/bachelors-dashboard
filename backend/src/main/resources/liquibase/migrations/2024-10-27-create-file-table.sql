create table file
(
    id              BIGSERIAL PRIMARY KEY,
    name            TEXT NOT NULL,
    type            TEXT NOT NULL,
    sequence_id     INTEGER NOT NULL,
    group_id        BIGINT NOT NULL REFERENCES file_group(id)
);

comment on table file is 'Таблица файлов';

comment on column file.id is 'Идентификатор файла';
comment on column file.name is 'Название файла';
comment on column file.type is 'Тип файла';
comment on column file.sequence_id is 'Порядковый номер файла';
comment on column file.group_id is 'Идентификатор группы файла';
