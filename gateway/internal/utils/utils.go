package utils

import (
	"fmt"
	"gateway/global"
	"strconv"

	"google.golang.org/grpc"
)

func ConnectToService(service string) *grpc.ClientConn {
	conn, err := grpc.Dial(service, grpc.WithInsecure())
	if err != nil {
		global.Logger.Error(fmt.Sprintf("cannot connect to service: %s", service))
	}

	return conn
}

func StringToInt64(s string) int64 {
	in, err := strconv.ParseInt(s, 10, 64)
	if err != nil {
		global.Logger.Error("Error parsing string to int64")
		in = 0
	}
	return in
}

func StringToInt32(s string) int32 {
	in, err := strconv.Atoi(s)
	if err != nil {
		global.Logger.Error("Error parsing string to int")
		in = 0
	}
	return int32(in)
}
