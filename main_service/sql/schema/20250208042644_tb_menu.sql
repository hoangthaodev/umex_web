-- +goose Up
-- +goose StatementBegin
create table tb_menu(
  menu_id bigint not null auto_increment,
  menu_name varchar(255) not null,
  menu_slug varchar(255) not null unique,
  menu_value text not null,
  primary key (menu_id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
drop table tb_menu;
-- +goose StatementEnd
