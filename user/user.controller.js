const userService = require("./user.service.js");

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await userService.createUser(userData);
    res.status(201).json({
      message: "User added successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const CreatOrUpdateUser = async (req, res) => {
  try {
    const userData = req.body;
    const userId = req.params.id;
    userData.user_id = userId; 
    const user = await userService.CreatOrUpdateUser(userData);
    res.status(200).json({
      message: "User created or updated successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const findUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await userService.findUserByEmail(email);
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};


const findUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.findUserById(userId);
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = {
  createUser,
  CreatOrUpdateUser,
  findUserByEmail,
  findUserById
};
