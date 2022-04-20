const mongoose = require("mongoose");


  mongoose
    .connect("mongodb://localhost:27017/ratemyfood", (err) => {
      if(!err){
        console.log('connection succeeded');
      }
      else{
        console.log('err: ', JSON.stringify(err, undefined, 2));
      }
    });


require('./models/userModel')
require('./models/postModel')