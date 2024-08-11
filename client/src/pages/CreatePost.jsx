import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImCross } from "react-icons/im";

export const CreatePost = () => {
  const [cat, setCat] = useState("");
  const [catsArr, setCatArr] = useState([]);

  const addCategory = (e) => {
    e.preventDefault();
    if (!cat) return;
    setCatArr([...catsArr, cat]);
    setCat("");
  };

  const deleteCategory = (str) => {
    const filtered = catsArr.filter((single) => single !== str);
    // console.log(filtered);
    setCatArr(filtered);
  };

  console.log(catsArr);
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-semibold md:text-2xl text-xl mt-8">
          Create a post
        </h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-6 my-8">
          <input
            type="text"
            className="px-4 py-1 outline-none border border-gray-200 rounded-sm"
            placeholder="Enter post title"
          />
          <input
            type="file"
            className="py-1 outline-none"
            placeholder="Enter post title"
          />
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
                onClick={addCategory}
                className="bg-gray-900 rounded-md text-white px-3 py-1  cursor-pointer text-xs md:text-sm"
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
            name=""
            id=""
            cols="30"
            rows="6"
            className="p-2 outline-none border border-gray-400"
            placeholder="Write post description"
          />
          <button className="bg-gray-900 w-full text-white rounded-md md:p-2 ">
            Create
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
