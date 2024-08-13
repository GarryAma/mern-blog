import { Post } from "../models/PostSchema.js";

//create post
export const createPost = async (request, response) => {
  try {
    const queryResult = await Post.create(request.body);
    response
      .status(200)
      .json({ message: "comments successfully created", data: queryResult });
  } catch (error) {
    console.log(error.message);
    response.json(error.message).status(500);
  }
};

//update post
export const updatePost = async (request, response) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      request.params.id,
      { $set: request.body },
      {
        new: true,
      }
    );
    if (!updatedPost) {
      return response.json({ message: "data not found" });
    }

    response
      .status(200)
      .json({ message: "posts have been updated", updatedPost });
  } catch (error) {
    console.log(error.message);
    response.json(error.message).status(500);
  }
};

//delete post
export const deletePost = async (request, response) => {
  try {
    const { id } = request.params;
    const deletedPost = await Post.findByIdAndDelete(id);

    response
      .status(200)
      .json({ message: "Post has been deleted", deletedPost });
  } catch (error) {
    console.log(error.message);
    response.json({ message: error.message }).status(500);
  }
};

//get post by id (details)
export const getPostById = async (request, response) => {
  const { id } = request.params;
  try {
    const post = await Post.findById(id);

    response
      .status(200)
      .json({ message: "post has been retrieved", data: post });
  } catch (error) {
    console.log(error.message);
    response.json({ message: error.message }).status(500);
  }
};

//get all post
export const getAllPosts = async (request, response) => {
  try {
    const posts = await Post.find({});

    response
      .status(200)
      .json({ message: "Posts have been fetched successfully", data: posts });
  } catch (error) {
    console.log(error.message);
    response.json({ message: error.message }).status(500);
  }
};

//get user post
export const getUserPost = async (request, response) => {
  try {
    const userPost = await Post.find({ userId: request.params.userId });

    response.status(200).json({
      message: `Posts for user ${request.params.userId} have been retrieved`,
      data: userPost,
    });
  } catch (error) {
    console.log(error.message);
    response.json({ message: error.message }).status(500);
  }
};
