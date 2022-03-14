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

const getByName = async (name) => {
  const movie = await db.Movie.findOne(
    {
      where: { title: name },
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
  getAll, create, getByName, removeData,
};
