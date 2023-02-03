const express = require('express');
const router = express.Router();
const { validateMiddleware, movieSchema } = require('./middlewares');
const SmsServiceInfrastructure = require('../../infrastructure/http/netflix-service.http.infrastructure');
const MovieService = require('../../../application/movie.service');
const movieService = new MovieService(new SmsServiceInfrastructure());

/**
 * Router responsible for interacting with router and define the relative path in http server.
 * In this sample case, the router is '/' and include query params validator with joi library
 */
router.get(
  '/',
  validateMiddleware(movieSchema.getMovieSchema),
  async (req, res) => {
    global.logger.info('query params: %s', req.query);
    const response = await movieService.getBase(req.query);

    res.status(200).json(response);
  }
);

module.exports = router;
