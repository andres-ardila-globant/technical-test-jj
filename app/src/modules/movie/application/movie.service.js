class MovieService {
  constructor(smsServiceInfrastructure) {
    this.smsServiceInfrastructure = smsServiceInfrastructure;
  }

  async getBase(queryParam) {
    return await this.smsServiceInfrastructure.getBase(queryParam);
  }
}

module.exports = MovieService;
