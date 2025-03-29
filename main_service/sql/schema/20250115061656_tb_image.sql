-- +goose Up
-- +goose StatementBegin
create table tb_image (
  image_id bigint not null auto_increment,
  image_url varchar(255) not null,
  image_title varchar(255) not null default '',
  image_alt varchar(255) not null default '',
  image_caption varchar(255) not null default '',
  created_at bigint not null,
  updated_at bigint not null default 0,
  primary key (image_id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
drop table tb_image;
-- +goose StatementEnd
