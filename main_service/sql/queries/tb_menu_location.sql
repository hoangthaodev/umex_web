-- name: GetAllLocation :many
select * from tb_menu_location;

-- name: GetLocationById :one
select * from tb_menu_location where location_id = ?;

-- name: GetLocationByMenuId :many
select * from tb_menu_location where menu_id = ?;

-- name: UpdateMenuLocation :exec
update tb_menu_location set menu_id = ? where location_id = ?;