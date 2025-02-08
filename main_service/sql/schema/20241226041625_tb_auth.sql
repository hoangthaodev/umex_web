-- +goose Up
-- +goose StatementBegin
create table tb_auth (
  auth_id bigint not null auto_increment,
  user_id bigint not null unique,
  role_id int not null comment '111: admin, 222: shop',
  created_at bigint not null,
  updated_at bigint not null default 0,
  primary key (auth_id),
  foreign key (user_id) references tb_user(user_id) on delete cascade
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
drop table tb_auth;
-- +goose StatementEnd
