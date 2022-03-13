const db = require('../models');

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

module.exports = { create, getByName, removeData };
