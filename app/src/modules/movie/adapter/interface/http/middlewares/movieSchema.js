const yup = require('yup');

const getMovieSchema = yup.object({
  body: yup.object(),
  query: yup.object({
    year: yup.number().positive(),
  }),
});

module.exports = { getMovieSchema };
