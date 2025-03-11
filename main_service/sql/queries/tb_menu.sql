-- name: GetAllMenu :many
select * from tb_menu;

-- name: GetMenuById :one
select * from tb_menu where menu_id = ?;

-- name: GetMenuBySlug :one
select * from tb_menu where menu_slug = ?;

-- name: CreateNewMenu :exec
insert into tb_menu (menu_name, menu_slug, menu_value) values (?,?,?);

-- name: UpdateMenu :exec
update tb_menu set menu_name = ?, menu_slug = ?, menu_value = ? where menu_id = ?;

-- name: DeleteMenu :exec
delete from tb_menu where menu_id = ?;