import express from "express";
import {
  createComment,
  deleteComment,
  getAllCommentsForEachPost,
  updateComment,
} from "../controllers/commentController.js";
import { verifyToken } from "../verifiedToken.js";
import { userAuth } from "../userAuth.js";

export const commentRouter = express.Router();

//create comment
commentRouter.post("/create", verifyToken, createComment);

//update comment
commentRouter.put("/:id", verifyToken, updateComment);

//delete comment
commentRouter.delete("/:id", verifyToken, deleteComment);

//get all the comments for each post
commentRouter.get("/post/:postId", getAllCommentsForEachPost);
