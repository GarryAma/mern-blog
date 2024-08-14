import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  getUserPost,
  updatePost,
} from "../controllers/postController.js";

export const postRoute = express.Router();

//create post
postRoute.post("/create", createPost);

//update post
postRoute.put("/:id", updatePost);

//delete post
postRoute.delete("/:id", deletePost);

//get post by id
postRoute.get("/:id", getPostById);

//get all posts
postRoute.get("/", getAllPosts);

//get user post
postRoute.get("/user/:userId", getUserPost);

//search post
// postRoute.get("/search/:keyword", searchPosts);
