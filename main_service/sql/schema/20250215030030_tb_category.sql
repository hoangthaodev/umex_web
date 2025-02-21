-- +goose Up
-- +goose StatementBegin
create table tb_category(
  category_id bigint not null auto_increment,
  category_name varchar(255) not null,
  category_slug varchar(255) not null,
  category_description text not null,
  category_parent bigint not null default 0,
  type_id int not null,
  created_at bigint not null,
  updated_at bigint not null default 0,
  PRIMARY KEY (category_id),
  unique (category_slug)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
drop table tb_category;
-- +goose StatementEnd
