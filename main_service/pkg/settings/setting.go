package settings

type Config struct {
	Server ServerSetting `mapstructure:"server"`
	Logger LoggerSetting `mapstructure:"logger"`
	Mysql  MysqlSetting  `mapstructure:"mysql"`
}

type ServerSetting struct {
	Host       string `mapstructure:"host"`
	Port       int    `mapstructure:"port"`
	PublishKey string `mapstructure:"publishKey"`
	PrivateKey string `mapstructure:"privateKey"`
}

type LoggerSetting struct {
	Level      string `mapstructure:"level"`
	Filename   string `mapstructure:"filename"`
	MaxSize    int    `mapstructure:"maxSize"`
	MaxBackups int    `mapstructure:"maxBackups"`
	MaxAge     int    `mapstructure:"maxAge"`
	Compress   bool   `mapstructure:"compress"`
}

type MysqlSetting struct {
	Host            string `mapstructure:"host"`
	Port            int    `mapstructure:"port"`
	Username        string `mapstructure:"user"`
	Password        string `mapstructure:"password"`
	DBName          string `mapstructure:"dbname"`
	MaxConnIdle     int    `mapstructure:"maxConnIdle"`
	MaxConnOpen     int    `mapstructure:"maxConnOpen"`
	ConnMaxLifetime int    `mapstructure:"connMaxLifetime"`
}
