const moviesRepository = require('../repositories/movies');
const status = require('../constants/statusCodes');
const messages = require('../constants/messages');
const charactersService = require('./characters');
const fetch = require('./fetch');

let movie;

const getById = async (id) => {
  const response = await fetch.getMovie(id);
  movie = await moviesRepository.getByName(response.title);

  if (movie) {
    return movie.dataValues;
  }

  movie = await fetch.getMovie(id);

  if (!movie) {
    const error = new Error(messages.NOT_FOUND_ERROR);
    error.status = status.NOT_FOUND_ERROR;
    throw error;
  }

  const movieSorted = {
    title: movie.title,
    director: movie.director,
    producer: movie.producer,
    release_date: movie.release_date,
  };

  const movieInDb = await moviesRepository.create(movieSorted);

  await charactersService.bulkCreate(movieInDb.id, movie.characters);

  return movieInDb.dataValues;
};

module.exports = { getById };
