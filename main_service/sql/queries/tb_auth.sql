-- name: GetAuthById :one
select * from tb_auth where auth_id = ?;

-- name: GetAuthByUser :one
select * from tb_auth where user_id = ?;

-- name: CreateNewAuth :exec
insert into tb_auth (user_id, role_id, created_at) values(?,?,?);

-- name: UpdateAuth :exec
update tb_auth set role_id = ?, updated_at = ? where auth_id = ?;

-- name: DeleteAuth :exec
delete from tb_auth where auth_id = ?;