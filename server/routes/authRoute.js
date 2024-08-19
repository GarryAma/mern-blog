import express from "express";
import {
  createUser,
  loginUser,
  logoutUser,
  refetch,
} from "../controllers/authController.js";

export const authRouter = express.Router();

//REGISTER
authRouter.post("/register", createUser);

//LOGIN
authRouter.post("/login", loginUser);

//LOGOUT
authRouter.get("/logout", logoutUser);

//REFETCH
authRouter.get("/refetch", refetch);
