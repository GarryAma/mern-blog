import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getImage,
  getPostById,
  getUserPost,
  updatePost,
} from "../controllers/postController.js";
import { verifyToken } from "../verifiedToken.js";
import { userAuth } from "../userAuth.js";
import path from "path";

export const postRoute = express.Router();

//create post
postRoute.post("/create", verifyToken, createPost);

//update post
postRoute.put("/:id", verifyToken, updatePost);

//delete post
postRoute.delete("/:id", verifyToken, deletePost);

//get post by id
postRoute.get("/:id", verifyToken, getPostById);

//get all posts
postRoute.get("/", getAllPosts);

//get user post
postRoute.get("/user/:userId", getUserPost);

postRoute.get("/getImage/:id", getImage);
