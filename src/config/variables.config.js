require('dotenv').config();

const config = {
  ADMIN_LOGIN:process.env.ADMIN_LOGIN,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  PORT: process.env.PORT || 9999,
  UPLOAD_IMAGES: 'upload',
  HOST_OF_SERVER: process.env.HOST_OF_SERVER,
  ONE_WAY_HASH_SECRET: process.env.ONE_WAY_HASH_SECRET,
  DISABLE_REQUEST_LOG: process.env.DISABLE_REQUEST_LOG,
  CORS: process.env.CORS?.split(',') || '*',
  PSQL: {
    URL: process.env.PSQL_URL,
    PORT: process.env.PSQL_PORT ,
    HOST: process.env.PSQL_HOST,
    USER: process.env.PSQL_USER,
    DATABASE: process.env.PSQL_DATABASE,
    PASSWORD: process.env.PSQL_PASSWORD
  },

  AUTH: {
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    ACCESS_TOKEN_ACTIVE_TIME: process.env.ACCESS_TOKEN_ACTIVE_TIME || '2m',
    REFRESH_TOKEN_ACTIVE_TIME: process.env.REFRESH_TOKEN_ACTIVE_TIME || '1d'
  }

};

export default config;
