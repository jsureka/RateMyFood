const express = require("express");
const {
    addPost,
    getPost,
    getUserPost
} = require("../controllers/postController");

const router = express.Router();

router.route("/add-post").post(addPost);
router.route("/get-post").get(getPost);
router.route("/get-user-post").get(getUserPost);

module.exports = router;