const db = require('../models');

const create = async (data) => {
  const character = await db.Character.create(data);
  return character;
};

const getByName = async (name) => {
  const character = await db.Character.findOne({ where: { name } });

  return character;
};

module.exports = { create, getByName };
