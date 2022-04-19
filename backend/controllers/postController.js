const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Post = require("../models/postModel");

// Register a User
exports.addPost = catchAsyncErrors(async (req, res, next) => {
  const { user_id,title,description,foodName,rating } = req.body;
  console.log(title);
  const post = await Post.create({
    user_id,
    title,
    description,
    foodName,
    rating
  });

  res.status(201).json({
    success: true,
    post,
  });
});