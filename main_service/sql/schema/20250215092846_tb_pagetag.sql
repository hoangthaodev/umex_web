-- +goose Up
-- +goose StatementBegin
create table tb_pagetag(
  pagetag_id bigint not null auto_increment,
  page_id bigint not null,
  tag_id bigint not null,
  primary key (pagetag_id),
  foreign key (page_id) references tb_page(page_id) on delete cascade,
  foreign key (tag_id) references tb_tag(tag_id) on delete cascade
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
drop table tb_pagetag;
-- +goose StatementEnd
