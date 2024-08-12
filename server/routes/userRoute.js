import express from "express";
import {
  deleteUser,
  getAllUsers,
  getuserById,
  updateUser,
} from "../controllers/userController.js";

export const userRouter = express.Router();

//update
userRouter.put("/user/:id", updateUser);

//delete
userRouter.delete("/user/:id", deleteUser);

//get user by id
userRouter.get("/user/:id", getuserById);

//get all users
userRouter.get("/users", getAllUsers);
