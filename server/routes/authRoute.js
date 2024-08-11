import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  createUser,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";

export const router = express.Router();

//REGISTER
router.post("/register", createUser);

// router.post("/login")

//LOGIN
router.post("/login", loginUser);

//LOGOUT
router.get("/logout", logoutUser);
