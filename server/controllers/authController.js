import jwt from "jsonwebtoken";
import { User } from "../models/UserSchema.js";
import bcrypt from "bcrypt";

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

    response.status(200).json({
      message: "User created",
      queryResult,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      error,
      message:
        "Oops! It looks like this email is already in use. If you already have an account, please log in. Otherwise, try registering with a different email address.",
    });
  }
};

export const loginUser = async (request, response) => {
  const { email, password } = request.body;

  try {
    const queryResult = await User.findOne({ email });
    console.log(queryResult);
    if (!queryResult)
      return response.status(404).json({ message: "User not found" });

    const isMatched = await bcrypt.compare(password, queryResult.password);
    if (!isMatched)
      return response.status(401).json({ message: "Invalid credentials!" });

    // console.log(queryResult);
    const token = jwt.sign(
      {
        id: queryResult._id,
        username: queryResult.username,
        email: queryResult.email,
      },
      process.env.SECRET,
      {
        expiresIn: "3d",
      }
    );
    console.log(`token dari login : ${token}`);
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
    response.status(500).json({ message: error.message });
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

//refetch when refresh, using token
export const refetch = (request, response) => {
  const token = request.cookies.token;
  if (!token) {
    console.log("there is no token");
    return response.status(401).json({ message: "you are unauthorized" });
  }
  console.log("Token dari refetch:", token);
  jwt.verify(token, process.env.SECRET, {}, (error, data) => {
    if (error) {
      return response.status(404).json({ error });
    }

    console.log(data);
    response.status(200).json(data);
  });
};

// NOTES
// - bcrypt.hash -> async
// - bcrypt.hashSync -> sync
// - bcrypt.compare -> async
// - bcrypt.compareSync -> sync
