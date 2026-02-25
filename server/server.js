
import dotenv from 'dotenv';
  import express from 'express';
  import cors from 'cors'; // Don't forget to import cors
  import connectDB from './config/db.js';

  // dotenv.config();
  const app = express();
  const PORT = process.env.PORT || 5000;
  
  app.use(cors());
  app.use(express.json());

  await connectDB();

  app.get('/', (req, res) => {
    res.send("Backend is running!");
  });

  app.listen(PORT, () => {
    console.log(`🚀 Server live on port ${PORT}`);
  });