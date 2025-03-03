// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: tb_token.sql

package database

import (
	"context"
)

const createNewToken = `-- name: CreateNewToken :exec
insert into tb_token (user_id, access_token, access_token_expired, refresh_token, refresh_token_expired, created_at) values(?,?,?,?,?,?)
`

type CreateNewTokenParams struct {
	UserID              int64
	AccessToken         string
	AccessTokenExpired  int64
	RefreshToken        string
	RefreshTokenExpired int64
	CreatedAt           int64
}

func (q *Queries) CreateNewToken(ctx context.Context, arg CreateNewTokenParams) error {
	_, err := q.db.ExecContext(ctx, createNewToken,
		arg.UserID,
		arg.AccessToken,
		arg.AccessTokenExpired,
		arg.RefreshToken,
		arg.RefreshTokenExpired,
		arg.CreatedAt,
	)
	return err
}

const deleteToken = `-- name: DeleteToken :exec
delete from tb_token where token_id = ?
`

func (q *Queries) DeleteToken(ctx context.Context, tokenID int64) error {
	_, err := q.db.ExecContext(ctx, deleteToken, tokenID)
	return err
}

const getTokenById = `-- name: GetTokenById :one
select token_id, user_id, access_token, access_token_expired, refresh_token, refresh_token_expired, created_at, updated_at from tb_token where token_id = ?
`

func (q *Queries) GetTokenById(ctx context.Context, tokenID int64) (TbToken, error) {
	row := q.db.QueryRowContext(ctx, getTokenById, tokenID)
	var i TbToken
	err := row.Scan(
		&i.TokenID,
		&i.UserID,
		&i.AccessToken,
		&i.AccessTokenExpired,
		&i.RefreshToken,
		&i.RefreshTokenExpired,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}

const getTokenByUserId = `-- name: GetTokenByUserId :one
select token_id, user_id, access_token, access_token_expired, refresh_token, refresh_token_expired, created_at, updated_at from tb_token where user_id = ?
`

func (q *Queries) GetTokenByUserId(ctx context.Context, userID int64) (TbToken, error) {
	row := q.db.QueryRowContext(ctx, getTokenByUserId, userID)
	var i TbToken
	err := row.Scan(
		&i.TokenID,
		&i.UserID,
		&i.AccessToken,
		&i.AccessTokenExpired,
		&i.RefreshToken,
		&i.RefreshTokenExpired,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}

const updateToken = `-- name: UpdateToken :exec
update tb_token set access_token =?, access_token_expired =?, refresh_token = ?, refresh_token_expired = ?, updated_at = ? where token_id = ?
`

type UpdateTokenParams struct {
	AccessToken         string
	AccessTokenExpired  int64
	RefreshToken        string
	RefreshTokenExpired int64
	UpdatedAt           int64
	TokenID             int64
}

func (q *Queries) UpdateToken(ctx context.Context, arg UpdateTokenParams) error {
	_, err := q.db.ExecContext(ctx, updateToken,
		arg.AccessToken,
		arg.AccessTokenExpired,
		arg.RefreshToken,
		arg.RefreshTokenExpired,
		arg.UpdatedAt,
		arg.TokenID,
	)
	return err
}
