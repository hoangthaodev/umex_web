-- +goose Up
-- +goose StatementBegin
create table tb_type(
  type_id bigint not null auto_increment,
  type_name varchar(255) not null,
  primary key (type_id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
drop table tb_type;
-- +goose StatementEnd
