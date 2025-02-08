run:
	go run cmd/server/main.go

gen-pb:
	protoc --go_out . --go-grpc_out . proto/main.proto

.PHONY: run gen-pb