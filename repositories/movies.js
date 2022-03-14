const { Op } = require('sequelize');
const db = require('../models');

const getAll = async (title) => {
  const movies = await db.Movie.findAll({
    where: {
      title: { [Op.substring]: title },
    },
  });
  return movies;
};

const getById = async (id) => {
  const movie = await db.Movie.findByPk(
    id,
    {
      include: [{ association: 'characters' }],
    },
  );
  return movie;
};

const create = async (data) => {
  const movie = await db.Movie.create(data);
  return movie;
};

const removeData = async () => {
  await db.Movie.destroy({ truncate: true });
};

module.exports = {
  getAll, create, removeData, getById,
};
