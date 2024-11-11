import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connection successful.");
  } catch (error) {
    console.error("DB connection failed!", error.message); // Added error message for clarity
    process.exit(1); // Exit the process if connection fails
  }
};

export default connectDB;
