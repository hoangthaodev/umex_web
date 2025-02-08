package settings

type Config struct {
	Server ServerSetting `mapstructure:"server"`
	Logger LoggerSetting `mapstructure:"logger"`
}

type ServerSetting struct {
	Mode       string `mapstructure:"mode"`
	Host       string `mapstructure:"host"`
	Port       int    `mapstructure:"port"`
	MainServer string `mapstructure:"mainServer"`
}

type LoggerSetting struct {
	Level      string `mapstructure:"level"`
	Filename   string `mapstructure:"filename"`
	MaxSize    int    `mapstructure:"maxSize"`
	MaxBackups int    `mapstructure:"maxBackups"`
	MaxAge     int    `mapstructure:"maxAge"`
	Compress   bool   `mapstructure:"compress"`
}
