CREATE TABLE table_history(
    id BIGSERIAL PRIMARY KEY,
    operation TEXT NOT NULL,
    path TEXT NOT NULL,
    value TEXT NOT NULL,
    from_value TEXT,
    timestamp TIMESTAMP NOT NULL
)
