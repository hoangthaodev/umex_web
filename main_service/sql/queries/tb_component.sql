-- name: GetAllComponent :many
select * from tb_component;

-- name: GetComponentById :one
select * from tb_component where component_id = ?;

-- name: GetComponentByName :one
select * from tb_component where component_name = ?;

-- name: GetComponentByPosition :many
select * from tb_component where component_position = ?;

-- name: CreateNewComponent :exec
insert into tb_component (component_name, component_position, component_index, component_map) values (?,?,?,?);

-- name: UpdateComponent :exec
update tb_component set component_name = ?, component_position = ?, component_index = ? where component_id = ?;

-- name: DeleteComponent :exec
delete from tb_component where component_id = ?;