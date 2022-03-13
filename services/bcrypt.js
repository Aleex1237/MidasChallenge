const bcrypt = require('bcrypt');

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const comparePassword = async (bodyPassword, userPassword) => {
  const passwordCompared = await bcrypt.compare(bodyPassword, userPassword);
  return passwordCompared;
};

module.exports = { encryptPassword, comparePassword };
