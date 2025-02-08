GOOSE_DRIVER="mysql"
GOOSE_DBSTRING="root:umex@123@456@tcp(localhost:3306)/main_db"
GOOSE_MIGRATION_DIR="sql/schema"

run:
	go run cmd/server/main.go

gen-pb:
	protoc --go_out . --go-grpc_out . proto/main.proto

goose-up:
	@GOOSE_DRIVER=${GOOSE_DRIVER} GOOSE_DBSTRING=${GOOSE_DBSTRING} GOOSE_MIGRATION_DIR=${GOOSE_MIGRATION_DIR} goose up

goose-down:
	@GOOSE_DRIVER=${GOOSE_DRIVER} GOOSE_DBSTRING=${GOOSE_DBSTRING} GOOSE_MIGRATION_DIR=${GOOSE_MIGRATION_DIR} goose down

goose-reset:
	@GOOSE_DRIVER=${GOOSE_DRIVER} GOOSE_DBSTRING=${GOOSE_DBSTRING} GOOSE_MIGRATION_DIR=${GOOSE_MIGRATION_DIR} goose reset

.PHONY: run gen-pb