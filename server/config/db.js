const mongoose = require("mongoose");
require("dotenv").config();

const connDb = async () => {
  const uri = process.env.MONGO_URL;
  let retries = 5;
  while (retries) {
    try {
      await mongoose.connect(uri);
      console.log("✅ MongoDB connected!");
      break;
    } catch (err) {
      console.error(`❌ MongoDB connection failed. Retries left: ${retries}`, err.message);
      retries--;
      await new Promise(res => setTimeout(res, 5000));
    }
  }
  if (retries === 0) {
    console.error("❌ Could not connect to MongoDB. Exiting...");
    process.exit(1);
  }
};

module.exports = connDb;