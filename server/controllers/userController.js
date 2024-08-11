//update
export const updateUser = async (request, response) => {
  try {
  } catch (error) {
    console.log(error.message);
    response.json({ message: error.message }).status(500);
  }
};
