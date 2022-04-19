const express = require("express");
const {
    addPost,
    getPost
} = require("../controllers/postController");

const router = express.Router();

router.route("/add-post").post(addPost);
//router.route("/get-post").get(getPost);

module.exports = router;