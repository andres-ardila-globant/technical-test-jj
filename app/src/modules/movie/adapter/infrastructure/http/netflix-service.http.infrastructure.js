const successResponse = require('./getMovieSuccess.mock.json');

class SmsServiceInfrastructure {
  async getBase({ year }) {
    return new Promise((resolve) => {
      global.logger.info('calling to netflix service dummy with axios');
      global.logger.info('finished the call');
      if (year) {
        const filtered = successResponse.filter((movie) => movie.Year === year);
        resolve(filtered);
      } else {
        resolve(successResponse);
      }
    });
  }
}

module.exports = SmsServiceInfrastructure;
