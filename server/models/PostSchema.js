import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
    },
    imagePath: {
      type: String,
      required: false,
    },
    imageFilename: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", PostSchema);
