CREATE TABLE student (
    id BIGSERIAL PRIMARY KEY,
    insurance TEXT NOT NULL,
    full_name TEXT NOT NULL
);


CREATE EXTENSION pg_trgm;
CREATE EXTENSION btree_gin;

create index student_insurance_idx on student using gin(insurance);
create index student_full_name_idx on student using gin(full_name);

