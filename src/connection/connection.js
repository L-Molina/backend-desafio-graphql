import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

try {
  const URL = process.env.MONGO_URL || 'mongodb://localhost:27017/test'
  mongoose.connect(URL);
  console.log('Base de datos conectada');
} catch (err) {
  console.log(error)
}    