// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: tb_pagetag.sql

package database

import (
	"context"
)

const createNewPagetag = `-- name: CreateNewPagetag :exec
insert into tb_pagetag (page_id, tag_id, pagetag_slug) values (?, ?,?)
`

type CreateNewPagetagParams struct {
	PageID      int64
	TagID       int64
	PagetagSlug string
}

func (q *Queries) CreateNewPagetag(ctx context.Context, arg CreateNewPagetagParams) error {
	_, err := q.db.ExecContext(ctx, createNewPagetag, arg.PageID, arg.TagID, arg.PagetagSlug)
	return err
}

const deletePagetag = `-- name: DeletePagetag :exec
delete from tb_pagetag where pagetag_id = ?
`

func (q *Queries) DeletePagetag(ctx context.Context, pagetagID int64) error {
	_, err := q.db.ExecContext(ctx, deletePagetag, pagetagID)
	return err
}

const getAllPagetag = `-- name: GetAllPagetag :many
select pagetag_id, page_id, tag_id, pagetag_slug from tb_pagetag
`

func (q *Queries) GetAllPagetag(ctx context.Context) ([]TbPagetag, error) {
	rows, err := q.db.QueryContext(ctx, getAllPagetag)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []TbPagetag
	for rows.Next() {
		var i TbPagetag
		if err := rows.Scan(
			&i.PagetagID,
			&i.PageID,
			&i.TagID,
			&i.PagetagSlug,
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

const getPagetagByPage = `-- name: GetPagetagByPage :many
select pagetag_id, page_id, tag_id, pagetag_slug from tb_pagetag where page_id = ?
`

func (q *Queries) GetPagetagByPage(ctx context.Context, pageID int64) ([]TbPagetag, error) {
	rows, err := q.db.QueryContext(ctx, getPagetagByPage, pageID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []TbPagetag
	for rows.Next() {
		var i TbPagetag
		if err := rows.Scan(
			&i.PagetagID,
			&i.PageID,
			&i.TagID,
			&i.PagetagSlug,
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

const getPagetagBySlug = `-- name: GetPagetagBySlug :one
select pagetag_id, page_id, tag_id, pagetag_slug from tb_pagetag where pagetag_slug = ?
`

func (q *Queries) GetPagetagBySlug(ctx context.Context, pagetagSlug string) (TbPagetag, error) {
	row := q.db.QueryRowContext(ctx, getPagetagBySlug, pagetagSlug)
	var i TbPagetag
	err := row.Scan(
		&i.PagetagID,
		&i.PageID,
		&i.TagID,
		&i.PagetagSlug,
	)
	return i, err
}

const getPagetagByTag = `-- name: GetPagetagByTag :many
select pagetag_id, page_id, tag_id, pagetag_slug from tb_pagetag where tag_id = ?
`

func (q *Queries) GetPagetagByTag(ctx context.Context, tagID int64) ([]TbPagetag, error) {
	rows, err := q.db.QueryContext(ctx, getPagetagByTag, tagID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []TbPagetag
	for rows.Next() {
		var i TbPagetag
		if err := rows.Scan(
			&i.PagetagID,
			&i.PageID,
			&i.TagID,
			&i.PagetagSlug,
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
