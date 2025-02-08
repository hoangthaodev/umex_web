-- +goose Up
-- +goose StatementBegin
create table tb_component(
  comp_id bigint not null auto_increment,
  comp_name varchar(255) not null unique,
  comp_position int not null,
  comp_index int not null default 0,
  primary key (comp_id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
drop table tb_component;
-- +goose StatementEnd
