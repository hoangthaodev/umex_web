-- +goose Up
-- +goose StatementBegin
create table tb_tag(
  tag_id bigint not null auto_increment,
  tag_name varchar(255) not null,
  tag_slug varchar(255) not null,
  tag_description text not null,
  type_id int not null,
  created_at bigint not null,
  updated_at bigint not null default 0,
  primary key (tag_id),
  unique (tag_slug)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
drop table tb_tag;
-- +goose StatementEnd
