/* eslint-disable no-param-reassign */
const moviesRepository = require('../repositories/movies');
const moviesCharacterRepository = require('../repositories/movieCharacter');
const usersRepository = require('../repositories/users');
const charactersRepository = require('../repositories/characters');
const status = require('../constants/statusCodes');
const messages = require('../constants/messages');
const charactersService = require('./characters');
const fetch = require('./fetch');

let movie;

const getAll = async (req) => {
  const movies = await moviesRepository.getAll(req.query.title);

  if (!movies) {
    const error = new Error(messages.NOT_FOUND_ERROR);
    error.status = status.NOT_FOUND_ERROR;
    throw error;
  }
  movies.forEach((res) => {
    res.dataValues.detail = `${req.protocol}://${req.get('host')}/movies/${res.id}`;
    res.dataValues.updatedAt = undefined;
  });
  return movies;
};

const getById = async (id) => {
  movie = await moviesRepository.getById(id);

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

const removeCharactersFromMovieId = async (id) => {
  await moviesCharacterRepository.remove(id);
};

const deleteAllData = async () => {
  await moviesCharacterRepository.removeData();
  await moviesRepository.removeData();
  await charactersRepository.removeData();
  await usersRepository.removeData();

  return 'All data removed';
};

module.exports = {
  getAll, getById, removeCharactersFromMovieId, deleteAllData,
};
