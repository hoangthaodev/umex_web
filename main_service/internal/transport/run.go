package transport

import (
	"fmt"
	"main_service/global"
	"main_service/proto/pb"
	"net"

	"google.golang.org/grpc"
)

type server struct {
	UserTransport
	ConfigTransport
	ComponentTransport
	AuthTransport
	ImageTransport
}

func RunServer() {
	lis, err := net.Listen("tcp", fmt.Sprintf("%s:%d", global.Config.Server.Host, global.Config.Server.Port))
	if err != nil {
		global.Logger.Fatal("error listen")
	}

	s := grpc.NewServer()
	pb.RegisterUserServiceServer(s, &server{})
	pb.RegisterConfigServiceServer(s, &server{})
	pb.RegisterComponentServiceServer(s, &server{})
	pb.RegisterAuthServiceServer(s, &server{})
	pb.RegisterImageServiceServer(s, &server{})
	global.Logger.Info(fmt.Sprintf("Server running on %s:%d", global.Config.Server.Host, global.Config.Server.Port))

	if err := s.Serve(lis); err != nil {
		global.Logger.Fatal("server error serve")
	}
}
