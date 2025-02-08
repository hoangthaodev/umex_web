-- +goose Up
-- +goose StatementBegin
insert into tb_auth (auth_id, user_id, role_id, created_at)
values (1, 1, 111, 0);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
delete from tb_auth where auth_id = 1;
-- +goose StatementEnd
