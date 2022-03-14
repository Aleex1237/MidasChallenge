require('dotenv').config();
const jwt = require('jsonwebtoken');
const status = require('../constants/statusCodes');
const messages = require('../constants/messages');

const generateToken = (user) => {
  const userForToken = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign(userForToken, process.env.SECRET_KEY, {
    expiresIn: '10h',
  });
  return token;
};

const compareToken = (token) => {
  const tokenVerified = jwt.verify(token, process.env.SECRET_KEY);

  if (!tokenVerified) {
    const error = new Error(messages.INVALID_TOKEN);
    error.status = status.FORBIDDEN;
    throw error;
  }

  return tokenVerified;
};

module.exports = { generateToken, compareToken };
