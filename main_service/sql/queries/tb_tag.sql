-- name: GetAllTag :many
select * from tb_tag;

-- name: GetTagById :one
select * from tb_tag where tag_id = ?;

-- name: GetTagByType :many
select * from tb_tag where type_id = ?;

-- name: GetTagBySlug :one
select * from tb_tag where tag_slug = ?;

-- name: CreateNewTag :exec
insert into tb_tag(tag_name, tag_slug, tag_description, type_id, created_at)
values(?,?,?,?,?);

-- name: UpdateTag :exec
update tb_tag set tag_name = ?, tag_slug = ?, tag_description = ?, type_id = ?, updated_at =? where tag_id = ?;

-- name: DeleteTag :exec
delete from tb_tag where tag_id = ?;