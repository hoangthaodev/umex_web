FROM golang:1.23 AS builder

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o gateway ./cmd/server

EXPOSE 9000

CMD [ "./gateway" ]