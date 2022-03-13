require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const userForToken = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    roleId: user.roleId,
  };

  const token = jwt.sign(userForToken, process.env.SECRET_KEY, {
    expiresIn: '10h',
  });
  return token;
};

module.exports = { generateToken };
