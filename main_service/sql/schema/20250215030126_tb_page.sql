-- +goose Up
-- +goose StatementBegin
create table tb_page(
  page_id bigint not null auto_increment,
  page_title varchar(255) not null,
  page_slug varchar(255) not null,
  page_content text not null,
  page_description text not null,
  page_status int not null default 0,
  page_publish_year int not null,
  page_publish_month int not null,
  page_publish_day int not null,
  page_feature_image bigint not null default 0,
  page_trash int not null default 0,
  user_id bigint not null,
  type_id bigint not null,
  template_id int not null default 0,
  created_at bigint not null,
  updated_at bigint not null default 0,
  PRIMARY KEY (page_id),
  unique (page_slug),
  foreign key (user_id) references tb_user(user_id) on delete cascade,
  foreign key (type_id) references tb_type(type_id) on delete cascade
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
drop table tb_page;
-- +goose StatementEnd
