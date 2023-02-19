import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI as string;

    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
