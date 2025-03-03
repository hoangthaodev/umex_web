-- name: GetTokenById :one
select * from tb_token where token_id = ?;

-- name: GetTokenByUserId :one
select * from tb_token where user_id = ?;

-- name: CreateNewToken :exec
insert into tb_token (user_id, access_token, access_token_expired, refresh_token, refresh_token_expired, created_at) values(?,?,?,?,?,?);

-- name: UpdateToken :exec
update tb_token set access_token =?, access_token_expired =?, refresh_token = ?, refresh_token_expired = ?, updated_at = ? where token_id = ?;

-- name: DeleteToken :exec
delete from tb_token where token_id = ?;