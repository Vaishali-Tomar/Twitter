import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js"; // ensure correct casing here
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
 dotenv.config(
 );
app.use("/api/auth", authRoute);

//console.log(process.env.MONGO_URI);

app.listen(8000, () => {
    console.log(`server is up and running at port 8000`);

    connectMongoDB();
});
