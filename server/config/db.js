import mongoose from 'mongoose';


const connectDB = async () => {
  try {
    // We use a variable for the URI to keep it clean
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📂 Active Database: ${conn.connection.name}`);
    
  } catch (error) {
    // This gives you a very clear explanation if things go wrong
    console.error(`❌ Connection Error: ${error.message}`);
    
    // Exit process with failure (1) if database fails to connect
    process.exit(1); 
  }
};

export default connectDB;