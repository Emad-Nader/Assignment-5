const express = require("express");
const router = express.Router();

const userController = require("./user.controller.js");


router.post("/createUser", userController.createUser);
router.put("/CreatOrUpdateUser/:id", userController.CreatOrUpdateUser);
router.get("/findUserByEmail/:email", userController.findUserByEmail);
router.get("/findUserById/:id", userController.findUserById);







module.exports = router;