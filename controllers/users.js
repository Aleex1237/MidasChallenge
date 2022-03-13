const status = require('../constants/statusCodes');
const messages = require('../constants/messages');
const authService = require('../services/auth');

const register = async (req, res, next) => {
  try {
    const user = await authService.create(req.body);

    res.status(status.RESPONSE_OK_CREATED).json({
      status: status.RESPONSE_OK_CREATED,
      msg: messages.RESPONSE_OK_CREATED,
      user,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await authService.login(req.body);

    res.status(status.RESPONSE_OK_CREATED).json({
      status: status.RESPONSE_OK_CREATED,
      msg: messages.RESPONSE_OK_CREATED,
      user,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = { register, login };
