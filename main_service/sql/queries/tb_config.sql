-- name: GetAllConfig :many
select * from tb_config;

-- name: GetConfigById :one
select * from tb_config where config_id = ?;

-- name: GetConfigByKey :one
select * from tb_config where config_key = ?;

-- name: CreateNewConfig :exec
insert into tb_config (config_key, config_value, config_style) values (?, ?, ?);

-- name: UpdateConfig :exec
update tb_config set config_key =?, config_value = ?, config_style = ? where config_id = ?;

-- name: DeleteConfig :exec
delete from tb_config where config_id = ?;