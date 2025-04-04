// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: tb_menu.sql

package database

import (
	"context"
)

const createNewMenu = `-- name: CreateNewMenu :exec
insert into tb_menu (menu_name, menu_slug, menu_value) values (?,?,?)
`

type CreateNewMenuParams struct {
	MenuName  string
	MenuSlug  string
	MenuValue string
}

func (q *Queries) CreateNewMenu(ctx context.Context, arg CreateNewMenuParams) error {
	_, err := q.db.ExecContext(ctx, createNewMenu, arg.MenuName, arg.MenuSlug, arg.MenuValue)
	return err
}

const deleteMenu = `-- name: DeleteMenu :exec
delete from tb_menu where menu_id = ?
`

func (q *Queries) DeleteMenu(ctx context.Context, menuID int64) error {
	_, err := q.db.ExecContext(ctx, deleteMenu, menuID)
	return err
}

const getAllMenu = `-- name: GetAllMenu :many
select menu_id, menu_name, menu_slug, menu_value from tb_menu
`

func (q *Queries) GetAllMenu(ctx context.Context) ([]TbMenu, error) {
	rows, err := q.db.QueryContext(ctx, getAllMenu)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []TbMenu
	for rows.Next() {
		var i TbMenu
		if err := rows.Scan(
			&i.MenuID,
			&i.MenuName,
			&i.MenuSlug,
			&i.MenuValue,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getMenuById = `-- name: GetMenuById :one
select menu_id, menu_name, menu_slug, menu_value from tb_menu where menu_id = ?
`

func (q *Queries) GetMenuById(ctx context.Context, menuID int64) (TbMenu, error) {
	row := q.db.QueryRowContext(ctx, getMenuById, menuID)
	var i TbMenu
	err := row.Scan(
		&i.MenuID,
		&i.MenuName,
		&i.MenuSlug,
		&i.MenuValue,
	)
	return i, err
}

const getMenuBySlug = `-- name: GetMenuBySlug :one
select menu_id, menu_name, menu_slug, menu_value from tb_menu where menu_slug = ?
`

func (q *Queries) GetMenuBySlug(ctx context.Context, menuSlug string) (TbMenu, error) {
	row := q.db.QueryRowContext(ctx, getMenuBySlug, menuSlug)
	var i TbMenu
	err := row.Scan(
		&i.MenuID,
		&i.MenuName,
		&i.MenuSlug,
		&i.MenuValue,
	)
	return i, err
}

const updateMenu = `-- name: UpdateMenu :exec
update tb_menu set menu_name = ?, menu_slug = ?, menu_value = ? where menu_id = ?
`

type UpdateMenuParams struct {
	MenuName  string
	MenuSlug  string
	MenuValue string
	MenuID    int64
}

func (q *Queries) UpdateMenu(ctx context.Context, arg UpdateMenuParams) error {
	_, err := q.db.ExecContext(ctx, updateMenu,
		arg.MenuName,
		arg.MenuSlug,
		arg.MenuValue,
		arg.MenuID,
	)
	return err
}
