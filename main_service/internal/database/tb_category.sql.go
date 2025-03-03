// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: tb_category.sql

package database

import (
	"context"
)

const createNewCategory = `-- name: CreateNewCategory :exec
insert into tb_category (category_name, category_slug, category_description, category_parent, type_id, created_at)
values (?,?,?,?,?,?)
`

type CreateNewCategoryParams struct {
	CategoryName        string
	CategorySlug        string
	CategoryDescription string
	CategoryParent      int64
	TypeID              int32
	CreatedAt           int64
}

func (q *Queries) CreateNewCategory(ctx context.Context, arg CreateNewCategoryParams) error {
	_, err := q.db.ExecContext(ctx, createNewCategory,
		arg.CategoryName,
		arg.CategorySlug,
		arg.CategoryDescription,
		arg.CategoryParent,
		arg.TypeID,
		arg.CreatedAt,
	)
	return err
}

const deleteCategory = `-- name: DeleteCategory :exec
delete from tb_category where category_id = ?
`

func (q *Queries) DeleteCategory(ctx context.Context, categoryID int64) error {
	_, err := q.db.ExecContext(ctx, deleteCategory, categoryID)
	return err
}

const getAllCategory = `-- name: GetAllCategory :many
select category_id, category_name, category_slug, category_description, category_parent, type_id, created_at, updated_at from tb_category
`

func (q *Queries) GetAllCategory(ctx context.Context) ([]TbCategory, error) {
	rows, err := q.db.QueryContext(ctx, getAllCategory)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []TbCategory
	for rows.Next() {
		var i TbCategory
		if err := rows.Scan(
			&i.CategoryID,
			&i.CategoryName,
			&i.CategorySlug,
			&i.CategoryDescription,
			&i.CategoryParent,
			&i.TypeID,
			&i.CreatedAt,
			&i.UpdatedAt,
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

const getCategoryById = `-- name: GetCategoryById :one
select category_id, category_name, category_slug, category_description, category_parent, type_id, created_at, updated_at from tb_category where category_id = ?
`

func (q *Queries) GetCategoryById(ctx context.Context, categoryID int64) (TbCategory, error) {
	row := q.db.QueryRowContext(ctx, getCategoryById, categoryID)
	var i TbCategory
	err := row.Scan(
		&i.CategoryID,
		&i.CategoryName,
		&i.CategorySlug,
		&i.CategoryDescription,
		&i.CategoryParent,
		&i.TypeID,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}

const getCategoryByParent = `-- name: GetCategoryByParent :many
select category_id, category_name, category_slug, category_description, category_parent, type_id, created_at, updated_at from tb_category where category_parent = ?
`

func (q *Queries) GetCategoryByParent(ctx context.Context, categoryParent int64) ([]TbCategory, error) {
	rows, err := q.db.QueryContext(ctx, getCategoryByParent, categoryParent)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []TbCategory
	for rows.Next() {
		var i TbCategory
		if err := rows.Scan(
			&i.CategoryID,
			&i.CategoryName,
			&i.CategorySlug,
			&i.CategoryDescription,
			&i.CategoryParent,
			&i.TypeID,
			&i.CreatedAt,
			&i.UpdatedAt,
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

const getCategoryBySlug = `-- name: GetCategoryBySlug :one
select category_id, category_name, category_slug, category_description, category_parent, type_id, created_at, updated_at from tb_category where category_slug = ?
`

func (q *Queries) GetCategoryBySlug(ctx context.Context, categorySlug string) (TbCategory, error) {
	row := q.db.QueryRowContext(ctx, getCategoryBySlug, categorySlug)
	var i TbCategory
	err := row.Scan(
		&i.CategoryID,
		&i.CategoryName,
		&i.CategorySlug,
		&i.CategoryDescription,
		&i.CategoryParent,
		&i.TypeID,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}

const getCategoryByType = `-- name: GetCategoryByType :many
select category_id, category_name, category_slug, category_description, category_parent, type_id, created_at, updated_at from tb_category where type_id = ?
`

func (q *Queries) GetCategoryByType(ctx context.Context, typeID int32) ([]TbCategory, error) {
	rows, err := q.db.QueryContext(ctx, getCategoryByType, typeID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []TbCategory
	for rows.Next() {
		var i TbCategory
		if err := rows.Scan(
			&i.CategoryID,
			&i.CategoryName,
			&i.CategorySlug,
			&i.CategoryDescription,
			&i.CategoryParent,
			&i.TypeID,
			&i.CreatedAt,
			&i.UpdatedAt,
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

const getCategoryByTypeNParent = `-- name: GetCategoryByTypeNParent :many
select category_id, category_name, category_slug, category_description, category_parent, type_id, created_at, updated_at from tb_category where type_id = ? and category_parent = ?
`

type GetCategoryByTypeNParentParams struct {
	TypeID         int32
	CategoryParent int64
}

func (q *Queries) GetCategoryByTypeNParent(ctx context.Context, arg GetCategoryByTypeNParentParams) ([]TbCategory, error) {
	rows, err := q.db.QueryContext(ctx, getCategoryByTypeNParent, arg.TypeID, arg.CategoryParent)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []TbCategory
	for rows.Next() {
		var i TbCategory
		if err := rows.Scan(
			&i.CategoryID,
			&i.CategoryName,
			&i.CategorySlug,
			&i.CategoryDescription,
			&i.CategoryParent,
			&i.TypeID,
			&i.CreatedAt,
			&i.UpdatedAt,
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

const updateCategory = `-- name: UpdateCategory :exec
update tb_category set category_name = ?, category_slug = ?, category_description = ?, category_parent = ?, type_id = ?, updated_at = ? where category_id = ?
`

type UpdateCategoryParams struct {
	CategoryName        string
	CategorySlug        string
	CategoryDescription string
	CategoryParent      int64
	TypeID              int32
	UpdatedAt           int64
	CategoryID          int64
}

func (q *Queries) UpdateCategory(ctx context.Context, arg UpdateCategoryParams) error {
	_, err := q.db.ExecContext(ctx, updateCategory,
		arg.CategoryName,
		arg.CategorySlug,
		arg.CategoryDescription,
		arg.CategoryParent,
		arg.TypeID,
		arg.UpdatedAt,
		arg.CategoryID,
	)
	return err
}
