import { useContext, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImCross } from "react-icons/im";
import { useForm } from "react-hook-form";
import axios from "axios";
import { url } from "../url";
import { UserContext } from "../useContext/UserContext";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const [cat, setCat] = useState("");
  const [catsArr, setCatArr] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const form = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  const image = form.watch("file");
  console.log(image);
  // console.log(form.formState.errors.file);
  console.log(user);

  const handleCreatePost = async (values) => {
    console.log(values);
    const formData = new FormData();
    formData.append("file", values.file[0]);

    // const allValues = {
    //   ...values,
    //   username: user.username,
    //   userId: user._id,
    //   categories: catsArr,
    // };

    try {
      const response = await axios.post(`${url}/api/upload`, formData, {
        withCredentials: true,
      });
      const { filename, path } = response.data;

      const allValues = {
        ...values,
        username: user.data.username,
        userId: user.data._id,
        categories: catsArr,
        imagePath: path,
        imageFilename: filename,
      };
      console.log(allValues);

      try {
        const response = await axios.post(
          `${url}/api/posts/create`,
          allValues,
          {
            withCredentials: true,
          }
        );
        console.log(response);

        navigate(`/posts/post/${response.data.data._id}`);
      } catch (error) {
        console.log(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const addCategory = () => {
    // e.preventDefault();
    if (!cat) return;
    setCatArr([...catsArr, cat]);
    setCat("");
  };

  const deleteCategory = (str) => {
    const filtered = catsArr.filter((single) => single !== str);
    // console.log(filtered);
    setCatArr(filtered);
  };

  // console.log(catsArr);
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8 text-xs">
        <h1 className="font-semibold md:text-2xl text-xl mt-8">
          Create a post
        </h1>
        <form
          className="w-full flex flex-col space-y-4 md:space-y-6 my-8"
          onSubmit={form.handleSubmit(handleCreatePost)}
        >
          <input
            type="text"
            className="px-4 py-2 outline-none border border-gray-200 rounded-sm"
            placeholder="Enter post title"
            name="title"
            {...form.register("title", { required: "Title is required" })}
          />
          {form.formState.errors.title && (
            <span className="text-red-600">
              {form.formState.errors.title.message}
            </span>
          )}
          <input
            type="file"
            className="py-1 outline-none"
            placeholder="Enter post title"
            name="file"
            {...form.register("file", { required: "Image is required" })}
          />
          {form.formState.errors.file && (
            <span className="text-red-600">
              {form.formState.errors.file.message}
            </span>
          )}
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                type="text"
                className="px-2 py-2 outline-none border border-gray-200 rounded-sm text-xs md:text-sm"
                placeholder="Enter post category"
                value={cat}
                onChange={(e) => setCat(e.target.value)}
              />
              <button
                type="button"
                onClick={addCategory}
                className="bg-gray-900 rounded-md text-white px-3 py-1  cursor-pointer text-xs md:text-xs"
              >
                Add
              </button>
            </div>

            {/* categories */}
            <div className="flex mt-3 flex-wrap">
              {catsArr.map((single, index) => (
                <div
                  className="flex justify-center items-center space-x-2 mr-4 bg-gray-900 px-2 py-1 rounded-md text-white text-xs md:text-sm mt-2"
                  onClick={() => deleteCategory(single)}
                  key={index}
                >
                  <p>{single}</p>
                  <p className="border border-white-800 rounded-full p-1 text-xs cursor-pointer">
                    <ImCross />
                  </p>
                </div>
              ))}
            </div>

            {/* text-area */}
          </div>
          <textarea
            name="description"
            id=""
            cols="30"
            rows="6"
            className="p-2 outline-none border border-gray-400"
            placeholder="Write post description"
            {...form.register("description", {
              required: "description is required",
            })}
          />
          {form.formState.errors.description && (
            <span className="text-red-600">
              {form.formState.errors.description.message}
            </span>
          )}
          <button
            className="bg-gray-900 w-full text-white rounded-md md:p-2 p-1"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
