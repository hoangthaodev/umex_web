-- +goose Up
-- +goose StatementBegin
create table tb_user(
  user_id bigint not null auto_increment,
  user_name varchar(255) unique not null,
  user_display_name varchar(255) not null,
  user_password varchar(255) not null,
  user_email varchar(255) unique not null,
  user_active int not null default 0 comment '0: inactive, 1: active',
  created_at bigint not null,
  updated_at bigint not null default 0,
  primary key (user_id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
drop table tb_user;
-- +goose StatementEnd
