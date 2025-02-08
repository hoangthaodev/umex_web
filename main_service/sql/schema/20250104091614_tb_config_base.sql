-- +goose Up
-- +goose StatementBegin
insert into tb_config(config_key, config_value, config_style) values
  ('site_name', 'Site Name', ''),
  ('site_description', 'Description', ''),
  ('site_favicon', '1',''),
  ('site_logo', '1','')
;
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
delete from tb_config where config_key in ('site_name', 'site_description', 'site_favicon', 'site_logo');
-- +goose StatementEnd
