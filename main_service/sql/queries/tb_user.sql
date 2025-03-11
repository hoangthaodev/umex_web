-- name: GetAllUser :many
select * from tb_user;

-- name: GetUserById :one
select * from tb_user where user_id = ?;

-- name: GetUserByUsername :one
select * from tb_user where user_name = ?;

-- name: GetUserByEmail :one
select * from tb_user where user_email = ?;

-- name: CreateNewUser :exec
insert into tb_user (user_name, user_password, user_email, user_active, user_display_name, created_at) values(?, ?,?,?,?,?);

-- name: UpdateUser :exec
update tb_user set user_name = ?, user_password = ?, user_email = ?, user_active = ?, user_display_name = ?, updated_at = ? where user_id = ?;

-- name: DeleteUser :exec
delete from tb_user where user_id = ?;