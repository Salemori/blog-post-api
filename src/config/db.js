const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    console.log("Connecting to Database...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connected!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
