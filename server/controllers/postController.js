import { Comment } from "../models/CommentSchema.js";
import { Post } from "../models/PostSchema.js";

//create post
export const createPost = async (request, response) => {
  try {
    const queryResult = await Post.create(request.body);
    response
      .status(200)
      .json({ message: "Posts successfully created", data: queryResult });
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

    await Comment.deleteMany({ postId: id });

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
  console.log(`id is ${id} -- get post by id`);
  try {
    const post = await Post.findById(id);

    console.log(post);
    response
      .status(200)
      .json({ message: "post has been retrieved", data: post });
  } catch (error) {
    console.log(error.message);
    response
      .status(500)
      .json({ message: error.message, err: "from get post by id" });
  }
};

//get all post
export const getAllPosts = async (request, response) => {
  try {
    const searchQuery = request.query.search || "";
    // console.log(query);
    const searchFilter = { title: { $regex: searchQuery, $options: "i" } };
    console.log(searchFilter);
    //.sort({createdAt:-1}) menampilkan paling baru
    const posts = await Post.find(searchFilter).sort({ createdAt: -1 });

    response
      .status(200)
      .json({ message: "Posts have been fetched successfully", data: posts });
  } catch (error) {
    console.log(error.message);
    response
      .json({ message: error.message, err: "err from get all post" })
      .status(500);
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

export const getImage = async (request, response) => {
  const { id } = request.params;
  console.log(path.join);
  console.log(__dirname);
  console.log(id);
  response.json({ message: "terkoneksi" });
};

//search post
// export const searchPosts = async (request, response) => {
//   const { keyword } = request.params;
//   try {
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).json(error.message);
//   }
// };
