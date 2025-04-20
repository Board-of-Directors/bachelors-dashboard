CREATE TABLE table_history(
    id BIGSERIAL PRIMARY KEY,
    table_id BIGINT NOT NULL REFERENCES file(id),
    operation TEXT NOT NULL,
    path TEXT NOT NULL,
    value TEXT NOT NULL,
    from_value TEXT,
    timestamp TIMESTAMP NOT NULL
);

CREATE INDEX table_history_table_id_idx on table_history(table_id);
