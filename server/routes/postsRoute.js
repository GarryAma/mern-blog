import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  getUserPost,
  updatePost,
} from "../controllers/postController.js";
import { verifyToken } from "../verifiedToken.js";
import { userAuth } from "../userAuth.js";

export const postRoute = express.Router();

//create post
postRoute.post("/create", verifyToken, userAuth, createPost);

//update post
postRoute.put("/:id", verifyToken, userAuth, updatePost);

//delete post
postRoute.delete("/:id", verifyToken, userAuth, deletePost);

//get post by id
postRoute.get("/:id", getPostById);

//get all posts
postRoute.get("/", getAllPosts);

//get user post
postRoute.get("/user/:userId", getUserPost);

//search post
// postRoute.get("/search/:keyword", searchPosts);
