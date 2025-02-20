-- +goose Up
-- +goose StatementBegin
create table tb_component(
  component_id bigint not null auto_increment,
  component_name varchar(255) not null unique,
  component_position int not null default 0,
  component_index int not null,
  component_map varchar(255) not null,
  primary key (comp_id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
drop table tb_component;
-- +goose StatementEnd
