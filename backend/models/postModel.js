const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user_id: {
      type: String,
      required:[true],
      unique:[true],
  },
  title:{
    type: String,
    required:[true],
  },
  description:{
    type: String,
    required:[true],
  },
  foodName:{
    type: String,
    required:[true],
  },
  rating:{
    type: Number,
    required:[true],
    maxlength:[10]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Post", postSchema);