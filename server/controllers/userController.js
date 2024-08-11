import jwt from "jsonwebtoken";
import { User } from "../models/UserSchema.js";
import bcrypt from "bcrypt";
import util from "util";
import { query } from "express";

export const createUser = async (request, response) => {
  const { username, email, password } = request.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const queryResult = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    response
      .json({
        message: "User created",
        queryResult,
      })
      .status(200);
  } catch (error) {
    console.log(error);
    response.json({ error }).status(500);
  }
};

export const loginUser = async (request, response) => {
  const { email, password } = request.body;

  try {
    const queryResult = await User.findOne({ email });

    if (!queryResult)
      return response.json({ message: "User not found" }).status(404);

    const isMatched = await bcrypt.compare(password, queryResult.password);
    if (!isMatched)
      return response.json({ message: "Invalid credentials!" }).status(401);

    // console.log(queryResult);
    const token = jwt.sign({ id: queryResult._id }, process.env.SECRET, {
      expiresIn: "3d",
    });

    const { password: pass, ...rest } = queryResult._doc;
    response.cookie("token", token).status(200).json(rest);
    // console.log(pass);
    // console.log(rest);
    // console.log(queryResult.$__);
    // console.log(queryResult._doc);

    // response.json({ rest });
    // response.json(queryResult);
  } catch (error) {
    console.log(error.message);
    response.json({ message: error.message }).status(500);
  }
};

export const logoutUser = async (request, response) => {
  try {
    response
      .clearCookie("token", {
        httpOnly: true, // Hanya dapat diakses melalui HTTP (bukan JavaScript di browser)
        secure: true, // Hanya untuk HTTPS jika di production
        sameSite: "none", // Hanya mengirim cookie dalam permintaan yang sama (untuk mencegah CSRF)
      })
      .json({ message: "Logout Successfully" })
      .status(200);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
};

// NOTES
// - bcrypt.hash -> async
// - bcrypt.hashSync -> sync
// - bcrypt.compare -> async
// - bcrypt.compareSync -> sync
