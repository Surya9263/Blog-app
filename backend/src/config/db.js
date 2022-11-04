const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://surya:surya123@cluster0.egl1mnc.mongodb.net/blog?retryWrites=true&w=majority"
  );
};

module.exports = connect;
