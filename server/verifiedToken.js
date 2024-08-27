import jwt from "jsonwebtoken";
import { userAuth } from "./userAuth.js";

export const verifyToken = (request, response, next) => {
  const token = request.cookies.token;
  console.log(`This from verifiedToken :: ${token}`);
  if (!token) {
    return response.status(401).json({ message: "You are not authorized" });
  }
  jwt.verify(token, process.env.SECRET, async (error, data) => {
    if (error) {
      return response.status(403).json({ message: "token isnt valid" });
    }
    console.log("passed");
    console.log(data);
    // console.log(request);
    request.userId = data._id;
    // console.log(request);
    // userAuth();
    next();
  });
};
