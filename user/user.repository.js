const User = require("../common/DB/Users.model");

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createUser = async (userData) => {
  const newUser = await User.build(userData);
  await newUser.save();
  return newUser;
};

const CreatOrUpdateUser = async (userData) => {
  const user = await User.findByPk(userData.user_id);
  if (user) {
    await user.update(userData);
    return user;
  } else {
    return await createUser(userData);
  }
}


const findUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
}



const findUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['role'] }
  });
  return user;
}


module.exports = {
  findByEmail,
  createUser,
  CreatOrUpdateUser,
  findUserByEmail,
  findUserById
};
