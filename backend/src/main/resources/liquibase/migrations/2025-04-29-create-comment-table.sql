CREATE TABLE comment(
    id BIGSERIAL PRIMARY KEY,
    author_id BIGINT NOT NULL REFERENCES employee(id),
    subject_id BIGINT NOT NULL REFERENCES student(id),
    content TEXT NOT NULL
);
