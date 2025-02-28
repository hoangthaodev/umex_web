// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: tb_pagetag.sql

package database

import (
	"context"
)

const createNewPagetag = `-- name: CreateNewPagetag :exec
insert into tb_pagetag (page_id, tag_id) values (?, ?)
`

type CreateNewPagetagParams struct {
	PageID int64
	TagID  int64
}

func (q *Queries) CreateNewPagetag(ctx context.Context, arg CreateNewPagetagParams) error {
	_, err := q.db.ExecContext(ctx, createNewPagetag, arg.PageID, arg.TagID)
	return err
}

const deletePagetag = `-- name: DeletePagetag :exec
delete from tb_pagetag where pagetag_id = ?
`

func (q *Queries) DeletePagetag(ctx context.Context, pagetagID int64) error {
	_, err := q.db.ExecContext(ctx, deletePagetag, pagetagID)
	return err
}

const getPageByTag = `-- name: GetPageByTag :many
select page_id, page_title, page_slug, page_content, page_description, page_status, page_publish_year, page_publish_month, page_publish_day, page_feature_image, user_id, type_id, template_id, created_at, updated_at from tb_page where page_id in(
select page_id from tb_pagetag where tag_id = ?) limit ? offset ?
`

type GetPageByTagParams struct {
	TagID  int64
	Limit  int32
	Offset int32
}

func (q *Queries) GetPageByTag(ctx context.Context, arg GetPageByTagParams) ([]TbPage, error) {
	rows, err := q.db.QueryContext(ctx, getPageByTag, arg.TagID, arg.Limit, arg.Offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []TbPage
	for rows.Next() {
		var i TbPage
		if err := rows.Scan(
			&i.PageID,
			&i.PageTitle,
			&i.PageSlug,
			&i.PageContent,
			&i.PageDescription,
			&i.PageStatus,
			&i.PagePublishYear,
			&i.PagePublishMonth,
			&i.PagePublishDay,
			&i.PageFeatureImage,
			&i.UserID,
			&i.TypeID,
			&i.TemplateID,
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

const getTagByPage = `-- name: GetTagByPage :many
select tag_id, tag_name, tag_slug, tag_description, type_id, created_at, updated_at from tb_tag where tag_id in(
select tag_id from tb_pagetag where page_id = ?)
`

func (q *Queries) GetTagByPage(ctx context.Context, pageID int64) ([]TbTag, error) {
	rows, err := q.db.QueryContext(ctx, getTagByPage, pageID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []TbTag
	for rows.Next() {
		var i TbTag
		if err := rows.Scan(
			&i.TagID,
			&i.TagName,
			&i.TagSlug,
			&i.TagDescription,
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
