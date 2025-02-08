-- name: GetAllComponent :many
select * from tb_component;

-- name: GetComponentById :one
select * from tb_component where comp_id = ?;

-- name: GetComponentByName :one
select * from tb_component where comp_name = ?;

-- name: GetComponentByPosition :many
select * from tb_component where comp_position = ?;

-- name: CreateNewComponent :exec
insert into tb_component (comp_name, comp_position, comp_index) values (?,?,?);

-- name: UpdateComponent :exec
update tb_component set comp_name = ?, comp_position = ?, comp_index = ? where comp_id = ?;

-- name: DeleteComponent :exec
delete from tb_component where comp_id = ?;