const db = require('../models');

const create = async (data) => {
  const character = await db.Character.create(data);
  return character;
};

module.exports = { create };
