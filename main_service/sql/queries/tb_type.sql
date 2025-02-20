-- name: GetAllType :many
select * from tb_type;

-- name: GetTypeById :one
select * from tb_type where type_id = ?;

-- name: CreateNewType :exec
INSERT INTO tb_type (type_name) VALUES (?);

-- name: UpdateType :exec
UPDATE tb_type SET type_name = ? WHERE type_id = ?;

-- name: DeleteType :exec
DELETE FROM tb_type WHERE type_id = ?;