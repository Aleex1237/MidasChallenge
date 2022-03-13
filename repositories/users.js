const db = require('../models');

const create = async (data) => {
  const user = await db.User.create(data);
  return user;
};

const getByEmail = async (data) => {
  const user = await db.User.findOne({ where: { email: data } });
  return user;
};

module.exports = { create, getByEmail };
