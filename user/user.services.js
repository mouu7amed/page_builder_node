const Users = require('./user.modal');

const listUsers = async () => {
  const users = await Users.find({});
  return users;
};

const userDetails = async (userId) => {
  const users = await Users.findOne({ _id: userId });
  return users;
};

const createUser = async (userBody) => {
  const user = new Users(userBody);
  const userResponse = await user.save();
  return userResponse;
};

const updateUser = async () => {};

const deleteUser = async () => {};

module.exports = {
  listUsers,
  userDetails,
  createUser,
  updateUser,
  deleteUser,
};
