const moviesService = require('../services/movies');
const status = require('../constants/statusCodes');
const messages = require('../constants/messages');

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
    await moviesService.deleteAllData();
  } catch (error) {
    next(error);
  }
};

module.exports = { getById, removeCharacters, deleteAllData };
