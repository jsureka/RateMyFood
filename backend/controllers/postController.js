const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Post = require("../models/postModel");

// Register a User
exports.addPost = catchAsyncErrors(async (req, res, next) => {
  const { user_id,title,description,foodName,rating,restaurantName,location } = req.body;
  console.log(title);
  const post = await Post.create({
    user_id,
    title,
    description,
    foodName,
    rating,
    location,
    restaurantName
  });

  res.status(201).json({
    success: true,
    post,
  });
});

exports.getPost = catchAsyncErrors(async (req, res, next) => {
  const post = await Post.find();

  res.status(200).json({
    success: true,
    post,
  });
});

exports.getUserPost = catchAsyncErrors(async (req, res, next) => {
  const {user_id} = req.body;
  const post = await Post.find( {user_id: user_id} );
  res.status(200).json({
    success: true,
    post,
  });
});