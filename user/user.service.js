const user = require("../common/DB/Users.model.js");
const userRepository = require('./user.repository.js');


const createUser = async (userData) => {
  try {
// Check if the email already exists
    const userExists = await userRepository.findByEmail(userData.email);
    if (userExists) {
      throw new Error("Email already exists");
    }
    return await userRepository.createUser(userData);
   
  } catch (error) {
    throw error;
  }
};


const CreatOrUpdateUser = async (userData) => {
  try {
    return await userRepository.CreatOrUpdateUser(userData);
  } catch (error) {
    throw error;
  }
}

const findUserByEmail = async (email) => {
  try {
    const userExists = await userRepository.findUserByEmail(email);
    if(userExists){
      return userExists;
    } else {
      throw new Error("no user found");
    }
  } catch (error) {
    throw error;
  }
}


const findUserById = async (id) => {
  try {
    const user = await userRepository.findUserById(id);
    if (user) {
      return user;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  CreatOrUpdateUser,
  findUserByEmail,
  findUserById
};