import jwt from "jsonwebtoken";
import { userAuth } from "./userAuth.js";

export const verifyToken = (request, response, next) => {
  const token = request.cookies.token;
  console.log(`This from verifiedToken :: ${request.params.id}`);
  if (!token) {
    return response.status(401).json({ message: "You are not authorized" });
  }
  jwt.verify(token, process.env.SECRET, async (error, data) => {
    if (error) {
      return response.status(403).json({ message: "token isnt valid" });
    }
    console.log(data);
    // console.log(request);
    request.userId = data.id;
    // console.log(request);
    // userAuth();
    next();
  });
};
