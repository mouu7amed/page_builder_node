const { createUser, listUsers, userDetails, updateUser, deleteUser } = require('./user.services');

const list = async (req, res) => {
  const users = await listUsers();
  res.json(users);
};

const details = async (req, res) => {
  const { userId } = req.params;
  const details = await userDetails(userId);
  res.json(details);
};

const create = async (req, res) => {
  const userBody = req.body;
  const user = await createUser(userBody);
  res.json(user);
};

const update = async (req, res) => {};

const deleteUserRecord = async (req, res) => {};

module.exports = {
  list,
  details,
  create,
  update,
  deleteUserRecord,
};
