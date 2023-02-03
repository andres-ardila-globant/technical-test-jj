const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const actuator = require('express-actuator');
const AppConfig = require('./config/app.config');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(
  actuator({
    infoGitMode: 'full',
  })
);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Routes path of the modules
const routesPath = {
  '/movie': path.join(
    __dirname,
    './modules/movie/adapter/interface/http/movie.http.interface.js'
  ),
};

Object.keys(routesPath).forEach((indexPath) => {
  app.use(indexPath, require(routesPath[indexPath]));
});

// Activating rest service
const server = app.listen(AppConfig().SERVER_PORT, () => {
  global.logger.info(
    `✌ ${AppConfig().SERVICE_NAME.toUpperCase()} htpp listening on port ${
      AppConfig().SERVER_PORT
    }`
  );
});
server.on('error', console.error);

module.exports = app;
