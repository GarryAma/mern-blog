import { useContext, useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImCross } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../url";
import { useForm } from "react-hook-form";
import { Register } from "./Register";
import { UserContext } from "../useContext/UserContext";

export const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [cat, setCat] = useState("");
  const [catsArr, setCatArr] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  // console.log(catsArr);

  // console.log(post);

  const form = useForm();

  const addCategory = () => {
    // e.preventDefault();
    if (!cat) return;
    // setCatArr([...catsArr, cat]);
    setPost({ ...post, categories: [...post?.categories, cat] });
    setCat("");
  };

  const deleteCategory = (str) => {
    const filtered = post.categories.filter((single) => single !== str);
    // console.log(filtered);
    setPost(filtered);
  };

  const handleOnSubmit = async (values) => {
    console.log(values);

    const formData = new FormData();
    formData.append("file", values.file[0]);

    try {
      const response = await axios.post(`${url}/api/upload`, formData, {
        withCredentials: true,
      });

      const { filename, path } = response.data;

      const combinedValues = {
        ...values,
        username: user.data.username,
        userId: user.data.id,
        categories: [post?.categories],
        imagePath: path,
        imageFilename: filename,
      };
      try {
        const response = await axios.put(
          `${url}/api/posts/${id}`,
          combinedValues,
          { withCredentials: true }
        );
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/api/posts/${id}`, {
        withCredentials: true,
      });
      setPost(response.data.data);
      form.setValue("title", response.data.data.title);
      form.setValue("description", response.data.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   console.log(catsArr);
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-semibold md:text-2xl text-xl mt-8">
          Update a post
        </h1>
        <form
          className="w-full flex flex-col space-y-4 md:space-y-6 my-8"
          onSubmit={form.handleSubmit(handleOnSubmit)}
        >
          <input
            name="title"
            type="text"
            className="px-4 py-1 outline-none border border-gray-200 rounded-sm"
            // placeholder={post?.title}
            // value={post?.title}
            {...form.register("title")}
          />
          <div className="flex flex-col space-y-8">
            <input
              type="file"
              className="py-1 outline-none"
              placeholder="Enter post title"
              {...form.register("file", { required: "Image is required" })}
            />
            <div className="w-[150px] h-[130px] border border-gray-300 p-1">
              {post?.imagePath && (
                <img
                  src={`${url}/${post.imagePath}`}
                  className="object-fill w-full h-full"
                ></img>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                type="text"
                className="px-2 py-1 outline-none border border-gray-200 rounded-sm text-xs md:text-sm"
                placeholder="Enter post category"
                value={cat}
                onChange={(e) => setCat(e.target.value)}
              />
              <button
                type="button"
                onClick={addCategory}
                className="bg-gray-900 rounded-md text-white px-3 py-1  cursor-pointer text-xs md:text-sm"
              >
                Add
              </button>
            </div>

            {/* categories */}
            <div className="flex mt-3 flex-wrap">
              {post?.categories &&
                post.categories.map((single, index) => (
                  <div
                    className="flex justify-center items-center space-x-2 mr-4 bg-gray-900 px-2 py-1 rounded-md text-white text-xs md:text-sm mt-2"
                    key={index}
                  >
                    <p>{single}</p>
                    <p className="border border-white-800 rounded-full p-1 text-xs cursor-pointer">
                      <button
                        type="button"
                        onClick={() => deleteCategory(single)}
                      >
                        <ImCross />
                      </button>
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
            // value={post?.description}
            {...form.register("description")}
          />
          <button
            className="bg-gray-900 w-full text-white rounded-md md:p-2"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
