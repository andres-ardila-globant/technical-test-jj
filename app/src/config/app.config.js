const path = require('path');
const packageJson = require('../../../package.json');
require('dotenv').config({
  path: path.join(__dirname, `../environments/.env.${process.env.NODE_ENV}`),
});

const AppConfig = () => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    SERVICE_NAME: process.env.SERVICE_NAME || packageJson.name,
    SERVICE_VERSION: process.env.SERVICE_VERSION || packageJson.version,
    SERVER_PORT: parseInt(process.env.SERVER_PORT) || 3000,
    SERVER_BASE_PATH: process.env.SERVER_BASE_PATH || '/',
  };
};

module.exports = AppConfig;
