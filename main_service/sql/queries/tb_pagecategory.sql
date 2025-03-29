-- name: GetAllPagecategory :many
select * from tb_pagecategory;

-- name: GetPagecategoryCategory :many
select * from tb_pagecategory where category_id = ?;

-- name: GetPagecategoryByPage :many
select * from tb_pagecategory where page_id = ?;

-- name: GetPagecategoryBySlug :one
select * from tb_pagecategory where pagecategory_slug = ?;

-- name: CreateNewPagecategory :exec
insert into tb_pagecategory (page_id, category_id, pagecategory_slug) values (?, ?,?);

-- name: DeletePagecategory :exec
delete from tb_pagecategory where pagecategory_id = ?;