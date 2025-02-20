-- name: GetPageByCategory :many
select * from tb_page where page_id in(
select page_id from tb_pagecategory where category_id = ?) limit ? offset ?;

-- name: GetCategoryByPage :many
select * from tb_category where category_id in(
select category_id from tb_pagecategory where page_id = ?);

-- name: CreateNewPagecategory :exec
insert into tb_pagecategory (page_id, category_id) values (?, ?);

-- name: DeletePagecategory :exec
delete from tb_pagecategory where pagecategory_id = ?;