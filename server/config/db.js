import mongoose from 'mongoose';
// import dns from "node:dns/promises";
// dns.setServers(["1.1.1.1"]);
import 'dotenv/config';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error.message);
    console.log("ERROR CODE:", error.code);
    process.exit(1);
  }
}

export default connectDB;