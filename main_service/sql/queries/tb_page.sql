-- name: GetAllPage :many
select * from tb_page limit ? offset ?;

-- name: GetPageById :one
select * from tb_page where page_id = ?;

-- name: GetPageBySlug :one
select * from tb_page where page_slug = ?;

-- name: GetPageByStatus :many
select * from tb_page where page_status = ? limit ? offset ?;

-- name: GetPageByUser :many
select * from tb_page where user_id = ? limit ? offset ?;

-- name: GetPageByType :many
select * from tb_page where type_id = ? limit ? offset ?;

-- name: GetPageByTypeNStatus :many
select * from tb_page where type_id = ? and page_status = ? limit ? offset ?;

-- name: GetPageByPublishYear :many
select * from tb_page where page_publish_year = ? limit ? offset ?;

-- name: GetPageByPublishYearMonth :many
select * from tb_page where page_publish_year = ? and page_publish_month = ? limit ? offset ?;

-- name: GetPageByPublishYearMonthDay :many
select * from tb_page where page_publish_year = ? and page_publish_month = ? and page_publish_day = ? limit ? offset ?;

-- name: CreateNewPage :exec
insert into tb_page(
  page_title,
  page_slug,
  page_content,
  page_description,
  page_status,
  page_publish_year,
  page_publish_month,
  page_publish_day,
  page_feature_image,
  user_id,
  type_id,
  template_id,
  created_at
) values (?,?,?,?,?,?,?,?,?,?,?,?,?);

-- name: UpdatePage :exec
update tb_page set
  page_title=?,
  page_slug=?,
  page_content=?,
  page_description=?,
  page_status=?,
  page_publish_year=?,
  page_publish_month=?,
  page_publish_day=?,
  page_feature_image=?,
  user_id =?,
  type_id =?,
  template_id = ?,
  updated_at = ?
where page_id = ?;

-- name: DeletePage :exec
delete from tb_page where page_id = ?;

-- name: CountPageByType :one
select count(*) from tb_page where type_id = ?;

-- name: CountPageByTypeNStatus :one
select count(*) from tb_page where type_id = ? and page_status = ?;

