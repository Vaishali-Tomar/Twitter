import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import userRoute from "./routes/user.js";
import cookieParser from "cookie-parser";
import connectMongoDB from './db/connectMongoDB.js';
import postRoute from "./routes/post.js"; // Corrected import statement
import notificationRoute from "./routes/notification.js";
import {v2 as cloudinary} from "cloudinary";


const app = express();

const PORT = process.env.PORT || 7000;
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/notification", notificationRoute);

app.listen(PORT, () => {
  console.log(`Server is up and running at port ${PORT}`);
  connectMongoDB();
});
