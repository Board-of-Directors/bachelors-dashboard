CREATE TABLE table_row (
    id BIGSERIAL PRIMARY KEY,
    table_id BIGINT NOT NULL REFERENCES file(id),
    color TEXT NOT NULL,
    sequence_id BIGINT NOT NULL
);


comment on TABLE table_row is 'Таблица строк таблиц';

comment on column table_row.id is 'Идентификатор строки';
comment on column table_row.table_id is 'Идентификатор родительской таблицы';
comment on column table_row.color is 'Цвет строки';
comment on column table_row.sequence_id is 'Порядковый номер строки';

CREATE INDEX row_table_id_idx on table_row(table_id);


CREATE TABLE table_column(
    id BIGSERIAL PRIMARY KEY,
    table_id BIGINT NOT NULL REFERENCES file(id),
    name TEXT NOT NULL,
    hidden BOOLEAN NOT NULL,
    sequence_id BIGINT NOT NULL,
    type TEXT NOT NULL
);

comment on table table_column is 'Таблица колонок таблиц';

comment on column table_column.id is 'Идентификатор колонки';
comment on column table_column.table_id is 'Идентификатор родительской таблицы';
comment on column table_column.name is 'Название колонки';
comment on column table_column.hidden is 'Является ли колонка скрытой';
comment on column table_column.sequence_id is 'Порядковый номер колонки';
comment on column table_column.type is 'Тип данных колонки';

CREATE INDEX column_table_id_idx on table_column(table_id);



CREATE TABLE table_item(
    id BIGSERIAL PRIMARY KEY,
    row_id BIGINT NOT NULL REFERENCES table_row(id),
    column_id BIGINT NOT NULL REFERENCES table_column(id),
    value TEXT NOT NULL
);

comment on table table_item is 'Таблица значений таблицы';

comment on column table_item.id is 'Идентификатор колонки';
comment on column table_item.row_id is 'Идентификатор строки';
comment on column table_item.column_id is 'Идентификатор колонки';
comment on column table_item.value is 'Значение ячейки';

CREATE INDEX table_item_row_id_idx on table_item(row_id);
CREATE INDEX table_item_column_id_idx on table_item(column_id);
