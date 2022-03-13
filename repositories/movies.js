const db = require('../models');

const getById = async (id) => {
  const movie = await db.Movie.findByPk(id, {
    include: [{ association: 'characters' }],
  });
  return movie;
};

const create = async (data) => {
  const movie = await db.Movie.create(data);
  return movie;
};

module.exports = { getById, create };
