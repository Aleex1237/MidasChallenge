const moviesService = require('../services/movies');
const status = require('../constants/statusCodes');
const messages = require('../constants/messages');

const getAll = async (req, res, next) => {
  try {
    const movies = await moviesService.getAll(req);
    res.status(status.RESPONSE_OK).json({
      status: status.RESPONSE_OK,
      msg: messages.RESPONSE_OK,
      movies,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const movie = await moviesService.getById(req.params.id);

    res.status(status.RESPONSE_OK).json({
      status: status.RESPONSE_OK,
      msg: messages.RESPONSE_OK,
      movie,
    });
  } catch (error) {
    next(error);
  }
};

const removeCharacters = async (req, res, next) => {
  try {
    await moviesService.removeCharactersFromMovieId(req.params.id);

    res.status(status.RESPONSE_OK).json({
      status: status.RESPONSE_OK,
      msg: messages.RESPONSE_OK,
      data: `Characters in Movie with ID:${req.params.id} removed.`,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAllData = async (req, res, next) => {
  try {
    const msg = await moviesService.deleteAllData();

    res.status(status.RESPONSE_OK).json({
      status: status.RESPONSE_OK,
      msg,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll, getById, removeCharacters, deleteAllData,
};
