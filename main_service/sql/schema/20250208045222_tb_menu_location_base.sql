-- +goose Up
-- +goose StatementBegin
insert into tb_menu_location(location_name) values
("Main Menu"),
("Main Menu - Mobile"),
("Secondary Menu"),
("Footer Menu"),
("TopBar Menu"),
("My Account Menu"),
("Vertical Menu");
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
delete from tb_menu_location where location_name in(
  "Main Menu",
  "Main Menu - Mobile",
  "Secondary Menu",
  "Footer Menu",
  "Topbar Menu",
  "My Account Menu",
  "Vertical Menu"
);
-- +goose StatementEnd
