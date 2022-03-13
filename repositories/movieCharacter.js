const db = require('../models');

const create = async (movieId, characterId) => {
  await db.Movie_Character.create({
    movie_id: movieId,
    character_id: characterId,
  });
};

const remove = async (movieId) => {
  await db.Movie_Character.destroy({ where: { movie_id: movieId } });
};

const removeData = async () => {
  await db.Movie_Character.destroy({ truncate: true });
};
module.exports = { create, remove, removeData };
