-- name: GetTokenById :one
select * from tb_token where token_id = ?;

-- name: GetTokenByUserId :one
select * from tb_token where user_id = ?;

-- name: CreateNewToken :exec
insert into tb_token (user_id, refresh_token, expired_token, created_at) values(?,?,?,?);

-- name: UpdateToken :exec
update tb_token set refresh_token = ?, expired_token = ?, updated_at = ? where token_id = ?;

-- name: DeleteToken :exec
delete from tb_token where token_id = ?;