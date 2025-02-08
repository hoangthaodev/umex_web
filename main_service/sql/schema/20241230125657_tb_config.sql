-- +goose Up
-- +goose StatementBegin
create table tb_config(
  config_id bigint not null auto_increment,
  config_key varchar(255) not null unique,
  config_value text not null,
  config_style varchar(255) not null,
  primary key (config_id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
drop table tb_config;
-- +goose StatementEnd
