export const userAuth = (request, response, next) => {
  console.log(`This from userAuth :: ${request.params.id}`);
  if (request.userId !== request.params.id) {
    return response
      .status(403)
      .json({ message: "You can  do something on your own account ONLY" });
  }
  next();
};
