-- name: GetPageByTag :many
select * from tb_page where page_id in(
select page_id from tb_pagetag where tag_id = ?) limit ? offset ?;

-- name: GetTagByPage :many
select * from tb_tag where tag_id in(
select tag_id from tb_pagetag where page_id = ?);

-- name: CreateNewPagetag :exec
insert into tb_pagetag (page_id, tag_id) values (?, ?);

-- name: DeletePagetag :exec
delete from tb_pagetag where pagetag_id = ?;