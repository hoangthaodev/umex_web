-- +goose Up
-- +goose StatementBegin
insert into tb_user(user_id, user_name, user_password, user_email, user_active, created_at)
values(1,'1', '$2a$10$kRqWnvhjf7TbVqO1Dfmt0.3Ia2EDCXt0tso3Q2SLc8dU6oVtFgPRC', 'admin@example.com', 1, 0);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
delete from tb_user where user_id =1;
-- +goose StatementEnd
