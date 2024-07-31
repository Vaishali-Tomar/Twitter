import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import cookieParser from "cookie-parser";
import connectMongoDB from './db/connectMongoDB.js';

const app = express();

const PORT = process.env.PORT || 7000;
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  console.log(`Server is up and running at port ${PORT}`);
  connectMongoDB();
});
