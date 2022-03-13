const db = require('../models');

const create = async (movieId, characterId) => {
  db.Movie_Character.create({
    movie_id: movieId,
    character_id: characterId,
  });
};

module.exports = { create };
