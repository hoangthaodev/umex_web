package utils

import (
	"fmt"
	"main_service/global"
	"strconv"
	"time"

	"google.golang.org/grpc"
)

// func MapDatabaseUserToGRPCUser(dbUser []database.TbUser) []*pb.User {
// 	var grpcUsers []*pb.User

// 	for _, user := range dbUser {
// 		grpcUser := &pb.User{
// 			UserId:       user.UserID,
// 			UserName:     user.UserName,
// 			UserPassword: user.UserPassword,
// 			UserEmail:    user.UserEmail,
// 			UserActive:   int32(user.UserActive),
// 		}
// 		grpcUsers = append(grpcUsers, grpcUser)
// 	}

// 	return grpcUsers
// }

func ConnectToService(service string) *grpc.ClientConn {
	conn, err := grpc.Dial(service, grpc.WithInsecure())
	if err != nil {
		global.Logger.Error(fmt.Sprintf("did not connect to %s: %v", service, err))
		return nil
	}
	return conn
}

func TimeToInt64(in time.Time) int64 {
	timeToString := in.Format("20060102150405")

	int64Time, err := strconv.ParseInt(timeToString, 10, 64)
	if err != nil {
		global.Logger.Error(fmt.Sprintf("Error parsing time, err:: %v", err))
		int64Time = 0
	}

	return int64Time

}
