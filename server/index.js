import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import { router } from "./routes/authRoute.js";

const app = express();
const PORT = 8080;

app.use(express.json());

//connection to database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to database`);
  } catch (error) {
    console.log(error.message);
  }
};

const startServer = async () => {
  await connectDB();
  app.use("/api/auth", router);
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
