package transport

import (
	"context"
	"main_service/global"
	"main_service/internal/services"
	"main_service/pkg/response"
	"main_service/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type ConfigTransport struct {
	pb.UnimplementedConfigServiceServer
	services.ConfigService
}

func (ct *ConfigTransport) GetAllConfig(context.Context, *emptypb.Empty) (*pb.ManyConfigResponse, error) {
	tbConf, err := ct.ConfigService.GetAllConfig()
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyConfigResponse{
			Code: 2001,
		}, nil
	}

	var configs []*pb.Config
	for _, conf := range tbConf {
		var config pb.Config
		config.ConfigId = conf.ConfigID
		config.ConfigKey = conf.ConfigKey
		config.ConfigValue = conf.ConfigValue
		config.ConfigStyle = conf.ConfigStyle

		configs = append(configs, &config)
	}

	return &pb.ManyConfigResponse{
		Code:    2000,
		Configs: configs,
	}, nil

}

func (ct *ConfigTransport) GetConfigByKey(c context.Context, in *pb.MessageRequest) (*pb.ConfigResponse, error) {
	tbConf, err := ct.ConfigService.GetConfigByKey(in.Str)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ConfigResponse{
			Code: 2001,
		}, nil
	}

	var config pb.Config
	config.ConfigId = tbConf.ConfigID
	config.ConfigKey = tbConf.ConfigKey
	config.ConfigValue = tbConf.ConfigValue
	config.ConfigStyle = tbConf.ConfigStyle

	return &pb.ConfigResponse{
		Code:   2000,
		Config: &config,
	}, nil
}

func (ct *ConfigTransport) GetConfigById(c context.Context, in *pb.NumbRequest) (*pb.ConfigResponse, error) {
	tbConf, err := ct.ConfigService.GetConfigById(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ConfigResponse{
			Code: 2001,
		}, nil
	}

	var config pb.Config
	config.ConfigId = tbConf.ConfigID
	config.ConfigKey = tbConf.ConfigKey
	config.ConfigValue = tbConf.ConfigValue
	config.ConfigStyle = tbConf.ConfigStyle

	return &pb.ConfigResponse{
		Code:   2000,
		Config: &config,
	}, nil
}

func (ct *ConfigTransport) CreateNewConfig(c context.Context, in *pb.Config) (*pb.ConfigResponse, error) {
	res, err := ct.ConfigService.CreateNewConfig(in.ConfigKey, in.ConfigValue, in.ConfigStyle)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ConfigResponse{
			Code: int32(response.ErrCodeCreateFail),
		}, nil
	}
	var config pb.Config
	config.ConfigId = res.ConfigID
	config.ConfigKey = res.ConfigKey
	config.ConfigValue = res.ConfigValue
	config.ConfigStyle = res.ConfigStyle

	return &pb.ConfigResponse{
		Code:   int32(response.ErrCodeSuccess),
		Config: &config,
	}, nil
}

func (ct *ConfigTransport) UpdateConfig(c context.Context, in *pb.Config) (*pb.MessageResponse, error) {
	err := ct.ConfigService.UpdateConfig(in.ConfigKey, in.ConfigValue, in.ConfigStyle, in.ConfigId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2003,
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "config updated",
	}, nil
}

func (ct *ConfigTransport) DeleteConfig(c context.Context, in *pb.NumbRequest) (*pb.MessageResponse, error) {
	err := ct.ConfigService.DeleteConfig(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code:    2004,
			Message: "error deleting config",
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "config deleted",
	}, nil
}
