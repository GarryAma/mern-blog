import { Comment } from "../models/CommentSchema.js";

//create comment
export const createComment = async (request, response) => {
  try {
    const newComment = await Comment.create(request.body);
    response
      .status(200)
      .json({ message: "Comment has been created", data: newComment });
  } catch (error) {
    console.log(error.message);
    response.status(500).json(error.message);
  }
};

//update comment
export const updateComment = async (request, response) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      request.params.id,
      { $set: request.body },
      { new: true }
    );

    if (!updatedComment) {
      console.log("error mate");
      return response.json({ message: "error,no comment found" });
    }

    response.status(200).json({
      message: "Comment has been updated successfully",
      updatedComment,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).json(error.message);
  }
};

//delete comment
export const deleteComment = async (request, response) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(request.params.id);
    response.status(200).json({
      message: "Comment has been successfully deleted",
      deletedComment,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).json(error.message);
  }
};

//get all the comments for each post
export const getAllCommentsForEachPost = async (request, response) => {
  try {
    const allCommentsForEachPost = await Comment.find({
      postId: request.params.postId,
    });
    response
      .status(200)
      .json({
        message: "Comments have been retrieved",
        allCommentsForEachPost,
      });
  } catch (error) {
    console.log(error.message);
    response.status(500).json(error.message);
  }
};
