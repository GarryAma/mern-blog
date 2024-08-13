import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import { authRouter } from "./routes/authRoute.js";
import { userRouter } from "./routes/userRoute.js";
import { postRoute } from "./routes/postsRoute.js";
import { commentRouter } from "./routes/commentsRoute.js";

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
  app.use("/api/auth", authRouter);
  app.use("/api", userRouter);
  app.use("/api/posts", postRoute);
  app.use("/api/comments", commentRouter);
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
