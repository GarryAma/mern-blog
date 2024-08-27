import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/authRoute.js";
import { userRouter } from "./routes/userRoute.js";
import { postRoute } from "./routes/postsRoute.js";
import { commentRouter } from "./routes/commentsRoute.js";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

//storage configuration for MULTER
const storage = multer.diskStorage({
  destination: function (request, file, cb) {
    cb(null, "./images");
  },
  filename: function (request, file, cb) {
    // const uniqueSuffix = Date.now() + path.extname(file.originalname);

    // cb(null, `${file.fieldname}-${uniqueSuffix}`);
    cb(null, Date.now() + "-" + file.originalname);
  },
});

export const upload = multer({ storage });

const app = express();
const PORT = 8080;

const corsOptions = {
  origin: "http://localhost:5173", // Ganti dengan asal front-end Anda
  credentials: true, // Mengizinkan kredensial lintas asal
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// Atur folder images sebagai folder statis
app.use("/images", express.static(path.join(__dirname, "/images")));
// console.log(express.static(path.join(__dirname, "/images")));

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

  //MULTER
  app.post("/api/upload", upload.single("file"), (request, response) => {
    // console.log(request.file);
    const { filename, path } = request.file;
    response.status(200).json({
      message: "image has been uploaded successfully",
      filename,
      path,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
