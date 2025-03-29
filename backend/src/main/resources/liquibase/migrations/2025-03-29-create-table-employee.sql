CREATE TABLE employee(
    id BIGSERIAL PRIMARY KEY,
    email    TEXT NOT NULL,
    password TEXT NOT NULL
);


comment on table employee is 'Таблица сотрудников';

comment on column employee.id is 'Идентификатор задачи';
comment on column employee.email is 'Электронная почта сотрудника';
comment on column employee.password is 'Пароль сотрудника';
