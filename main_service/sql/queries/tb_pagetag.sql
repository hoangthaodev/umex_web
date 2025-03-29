-- name: GetAllPagetag :many
select * from tb_pagetag;

-- name: GetPagetagByTag :many
select * from tb_pagetag where tag_id = ?;

-- name: GetPagetagByPage :many
select * from tb_pagetag where page_id = ?;

-- name: GetPagetagBySlug :one
select * from tb_pagetag where pagetag_slug = ?;

-- name: CreateNewPagetag :exec
insert into tb_pagetag (page_id, tag_id, pagetag_slug) values (?, ?,?);

-- name: DeletePagetag :exec
delete from tb_pagetag where pagetag_id = ?;