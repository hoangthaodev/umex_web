-- +goose Up
-- +goose StatementBegin
create table tb_token (
  token_id bigint not null auto_increment,
  user_id bigint not null unique,
  refresh_token varchar(255) not null,
  expired_token bigint not null,
  created_at bigint not null,
  updated_at bigint not null default 0,
  primary key (token_id),
  foreign key (user_id) references tb_user(user_id) on delete cascade
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
drop table tb_token;
-- +goose StatementEnd
