-- name: GetAllImage :many
select * from tb_image;

-- name: GetImageById :one
select * from tb_image where image_id = ?;

-- name: GetImageByUrl :one
select * from tb_image where image_url = ?;

-- name: CreateNewImage :exec
insert into tb_image (image_title, image_url, image_alt, image_caption, created_at)
values (?, ?, ?, ?, ?);

-- name: UpdateImage :exec
update tb_image
set image_title = ?, image_url = ?, image_alt = ?, image_caption = ?, updated_at = ?
where image_id = ?;

-- name: DeleteImage :exec
delete from tb_image where image_id = ?;