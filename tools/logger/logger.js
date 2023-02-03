const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.timestamp(),
    winston.format.metadata(),
    winston.format.printf(
      (info) => `${info.timestamp}: [${info.level}]: ${info.message}`
    ),
    winston.format.json()
  ),
  transports: [new winston.transports.Console()],
});

global.logger = logger;

module.exports = logger;
