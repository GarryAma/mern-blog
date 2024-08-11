import express from "express";
import {
  createUser,
  loginUser,
  logoutUser,
} from "../controllers/authController.js";

export const router = express.Router();

//REGISTER
router.post("/register", createUser);

// router.post("/login")

//LOGIN
router.post("/login", loginUser);

//LOGOUT
router.get("/logout", logoutUser);
