const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user_id: {
      type: String,
      required:[true],
      
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
  restaurantName:{
    type: String,
    required:[true],
  },
  location:{
    type:String,
    required:[true,"Please enter the restaurant location"],
    minlength:[8],
    maxlength:[50]

  },
  isHidden: {
    type:Boolean,
    default:[false]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Post", postSchema);