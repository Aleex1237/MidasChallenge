const usersRepository = require('../repositories/users');
const bcryptService = require('./bcrypt');
const jwtService = require('./jwt');
const status = require('../constants/statusCodes');
const messages = require('../constants/messages');

const create = async (data) => {
  const encryptedPassword = await bcryptService.encryptPassword(data.password);

  const userBody = {
    email: data.email,
    password: encryptedPassword,
  };

  const user = await usersRepository.create(userBody);

  if (!user) {
    const error = new Error(messages.INTERNAL_ERROR);
    error.status = status.INTERNAL_ERROR;
    throw error;
  }

  return {
    id: user.dataValues.id,
    email: user.dataValues.email,
  };
};

const login = async (data) => {
  const user = await usersRepository.getByEmail(data.email);

  if (!user) {
    const error = new Error(messages.EMAIL_NOT_FOUND);
    error.status = status.FORBIDDEN;
    throw error;
  }

  const desencryptedPassword = await bcryptService.comparePassword(data.password, user.password);

  if (!desencryptedPassword) {
    const error = new Error(messages.NO_MATCH_USER);
    error.status = status.NOT_FOUND_ERROR;
    throw error;
  }

  const token = jwtService.generateToken(user);

  return token;
};

module.exports = { create, login };
