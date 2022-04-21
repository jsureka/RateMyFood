const express = require("express");
const {
  registerUser,
  loginUser,
  getUser
} = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/get-user").get(getUser);


module.exports = router;