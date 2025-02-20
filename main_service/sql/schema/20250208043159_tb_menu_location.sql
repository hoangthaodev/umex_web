-- +goose Up
-- +goose StatementBegin
create table tb_menu_location(
  location_id bigint not null auto_increment,
  location_name varchar(255) not null,
  menu_id bigint not null default 0,
  primary key (loc_id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
drop table tb_menu_location;
-- +goose StatementEnd
