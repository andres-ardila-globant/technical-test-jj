const path = require('path');
require('../../tools/logger/logger');
global.__appdir = __dirname;
global.__basedir = path.join(__dirname, '../../..');
require('./app.http');
