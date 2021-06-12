const express = require("express");
const router = express.Router();

const User = require("../controllers/user");

//Get User by user_id
router.get("/user/:user_id", User.getUserById);

// Get User by user_type
router.post("/user/usertype", User.getUserByUserType);

// Get User by user_type
router.get("/user/manager/:id", User.getUsersByMangerID);

//Get Device Token By User id
router.get("/user/deviceToken/:user_id", User.getDeviceTokenbyUserId);

//Update User
router.put("/user/update/:user_id", User.updateUserById);

//Update Device Token
router.put("/user/update/deviceToken/:user_id", User.updateUserDeviceToken);


//Get All Users
router.get("/users", User.getUserList);

module.exports = router;
