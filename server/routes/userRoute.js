import express from "express";
import {
  deleteUser,
  getAllUsers,
  getuserById,
  updateUser,
} from "../controllers/userController.js";
import { verifyToken } from "../verifiedToken.js";
import { userAuth } from "../userAuth.js";

export const userRouter = express.Router();

//update
userRouter.patch("/user/:id", verifyToken, updateUser);

//delete
userRouter.delete("/user/:id", verifyToken, deleteUser);

//get user by id
userRouter.get("/user/:id", getuserById);

//get all users
userRouter.get("/users", getAllUsers);
