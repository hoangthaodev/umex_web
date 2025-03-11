// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: tb_image.sql

package database

import (
	"context"
)

const createNewImage = `-- name: CreateNewImage :exec
insert into tb_image (image_title, image_url, image_alt, image_caption, created_at)
values (?, ?, ?, ?, ?)
`

type CreateNewImageParams struct {
	ImageTitle   string
	ImageUrl     string
	ImageAlt     string
	ImageCaption string
	CreatedAt    int64
}

func (q *Queries) CreateNewImage(ctx context.Context, arg CreateNewImageParams) error {
	_, err := q.db.ExecContext(ctx, createNewImage,
		arg.ImageTitle,
		arg.ImageUrl,
		arg.ImageAlt,
		arg.ImageCaption,
		arg.CreatedAt,
	)
	return err
}

const deleteImage = `-- name: DeleteImage :exec
delete from tb_image where image_id = ?
`

func (q *Queries) DeleteImage(ctx context.Context, imageID int64) error {
	_, err := q.db.ExecContext(ctx, deleteImage, imageID)
	return err
}

const getAllImage = `-- name: GetAllImage :many
select image_id, image_url, image_title, image_alt, image_caption, created_at, updated_at from tb_image
`

func (q *Queries) GetAllImage(ctx context.Context) ([]TbImage, error) {
	rows, err := q.db.QueryContext(ctx, getAllImage)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []TbImage
	for rows.Next() {
		var i TbImage
		if err := rows.Scan(
			&i.ImageID,
			&i.ImageUrl,
			&i.ImageTitle,
			&i.ImageAlt,
			&i.ImageCaption,
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

const getImageById = `-- name: GetImageById :one
select image_id, image_url, image_title, image_alt, image_caption, created_at, updated_at from tb_image where image_id = ?
`

func (q *Queries) GetImageById(ctx context.Context, imageID int64) (TbImage, error) {
	row := q.db.QueryRowContext(ctx, getImageById, imageID)
	var i TbImage
	err := row.Scan(
		&i.ImageID,
		&i.ImageUrl,
		&i.ImageTitle,
		&i.ImageAlt,
		&i.ImageCaption,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}

const getImageByUrl = `-- name: GetImageByUrl :one
select image_id, image_url, image_title, image_alt, image_caption, created_at, updated_at from tb_image where image_url = ?
`

func (q *Queries) GetImageByUrl(ctx context.Context, imageUrl string) (TbImage, error) {
	row := q.db.QueryRowContext(ctx, getImageByUrl, imageUrl)
	var i TbImage
	err := row.Scan(
		&i.ImageID,
		&i.ImageUrl,
		&i.ImageTitle,
		&i.ImageAlt,
		&i.ImageCaption,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}

const updateImage = `-- name: UpdateImage :exec
update tb_image
set image_title = ?, image_url = ?, image_alt = ?, image_caption = ?, updated_at = ?
where image_id = ?
`

type UpdateImageParams struct {
	ImageTitle   string
	ImageUrl     string
	ImageAlt     string
	ImageCaption string
	UpdatedAt    int64
	ImageID      int64
}

func (q *Queries) UpdateImage(ctx context.Context, arg UpdateImageParams) error {
	_, err := q.db.ExecContext(ctx, updateImage,
		arg.ImageTitle,
		arg.ImageUrl,
		arg.ImageAlt,
		arg.ImageCaption,
		arg.UpdatedAt,
		arg.ImageID,
	)
	return err
}
