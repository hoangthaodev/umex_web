-- name: GetAllCategory :many
select * from tb_category;

-- name: GetCategoryById :one
select * from tb_category where category_id = ?;

-- name: GetCategoryBySlug :one
select * from tb_category where category_slug = ?;

-- name: GetCategoryByType :many
select * from tb_category where type_id = ?;

-- name: GetCategoryByParent :many
select * from tb_category where category_parent = ?;

-- name: GetCategoryByTypeNParent :many
select * from tb_category where type_id = ? and category_parent = ?;

-- name: CreateNewCategory :exec
insert into tb_category (category_name, category_slug, category_description, category_parent, type_id, created_at)
values (?,?,?,?,?,?);

-- name: UpdateCategory :exec
update tb_category set category_name = ?, category_slug = ?, category_description = ?, category_parent = ?, type_id = ?, updated_at = ? where category_id = ?;

-- name: DeleteCategory :exec
delete from tb_category where category_id = ?;