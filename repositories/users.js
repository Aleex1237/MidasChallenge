const db = require('../models');

const create = async (data) => {
  const user = await db.User.create(data);
  return user;
};

const getByEmail = async (data) => {
  const user = await db.User.findOne({ where: { email: data } });
  return user;
};

const removeData = async () => {
  await db.User.destroy({ truncate: true });
};

module.exports = { create, getByEmail, removeData };
