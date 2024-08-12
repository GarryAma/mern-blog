import bcrypt from "bcrypt";
import { User } from "../models/UserSchema.js";
import { Post } from "../models/PostSchema.js";
import { Comment } from "../models/CommentSchema.js";

//update
export const updateUser = async (request, response) => {
  try {
    const { username, email, password } = request.body;
    const userId = request.params.id;
    const updatedFields = {};

    console.log(userId);

    if (username) updatedFields.username = username;

    if (email) updatedFields.email = email;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPasswodrd = await bcrypt.hash(password, salt);
      updatedFields.password = hashedPasswodrd;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, {
      new: true,
    });

    response.status(200).json({
      message: "User has been updated successfully",
      updatedData: updatedUser,
    });
  } catch (error) {
    console.log(error.message);
    response.json({ message: error.message }).status(500);
  }
};

//DELETE

export const deleteUser = async (request, response) => {
  try {
    const { id } = request.params;
    await User.findByIdAndDelete(id);
    await Post.deleteOne({ userId: id });
    await Comment.deleteOne({ userId: id });

    response.status(200).json({ message: "User has been deleted" });
  } catch (error) {
    console.log(error.message);
    response.json({ message: error.message }).status(500);
  }
};

//GET ALL USERS
export const getAllUsers = async (request, response) => {
  try {
    const users = await User.find({});

    response
      .status(200)
      .json({ message: "Users have been fetched successfully", data: users });
  } catch (error) {
    console.log(error.message);
    response.json({ message: error.message }).status(500);
  }
};

export const getuserById = async (request, response) => {
  const { id } = request.params;
  try {
    const user = await User.findById(id);

    response
      .status(200)
      .json({ message: "user has been retrieved", data: user });
  } catch (error) {
    console.log(error.message);
    response.json({ message: error.message }).status(500);
  }
};
