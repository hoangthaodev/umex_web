-- +goose Up
-- +goose StatementBegin
create table tb_pagecategory(
  pagecategory_id bigint not null auto_increment,
  page_id bigint not null,
  category_id bigint not null,
  primary key (pagecategory_id),
  foreign key (page_id) references tb_page(page_id) on delete cascade,
  foreign key (category_id) references tb_category(category_id) on delete cascade
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
drop table tb_pagecategory;
-- +goose StatementEnd
