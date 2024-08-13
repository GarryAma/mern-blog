import express from "express";
import {
  createComment,
  deleteComment,
  updateComment,
} from "../controllers/commentController.js";

export const commentRouter = express.Router();

//create comment
commentRouter.post("/create", createComment);

//update comment
commentRouter.put("/:id", updateComment);

//delete comment
commentRouter.delete("/:id", deleteComment);

//get all the comments for each post
commentRouter.get("/post/:postId");
