const jwtService = require('../services/jwt');
const messages = require('../constants/messages');
const status = require('../constants/statusCodes');

const authUser = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      const error = new Error(messages.FORBIDDEN);
      error.status = status.FORBIDDEN;
      throw error;
    }

    const token = req.headers.authorization.split(' ')[1];

    jwtService.compareToken(token);

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authUser };
