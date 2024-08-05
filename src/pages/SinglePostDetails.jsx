import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

export const SinglePostDetails = () => {
  return (
    <>
      <Navbar />
      <div className="md:h-[100vh]">
        <div className="w-full flex flex-col space-y-2 md:flex-row mt-8 md:space-x-4 p-2">
          {/* left */}
          <div className="w-full md:w-[35%] h-[250px] md:h-[400px] flex rounded-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1699943248190-c8eeb20f1718?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full md:object-fill object-cover "
            />
          </div>

          {/* right */}
          <div className="flex flex-col md:w-[65%] space-y-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
                Street Photography
              </h1>
              <div className="flex space-x-4 items-center">
                <span className="text-xl md:hover:text-green-600 text-green-600 cursor-pointer">
                  <CiEdit />
                </span>
                <span className="text-xl md:hover:text-red-600 text-red-600 cursor-pointer">
                  <MdOutlineDelete />
                </span>
              </div>
            </div>
            <div className="flex mb-2 text-sm font-semibold text-gray-800 items-center justify-between">
              <p>@Luke Miller</p>
              <div className="flex md:space-x-2 space-x-1">
                <p>November 14, 2023</p>
                <p>16:45</p>
              </div>
            </div>
            <p className="text-sm md:text-lg">
              This stunning photograph captures the tranquil beauty of a sunrise
              over a serene landscape. The scene features a picturesque horizon
              with soft, pastel-colored skies transitioning from night to day. A
              gentle mist hovers over a calm lake, reflecting the early morning
              light and adding a dreamy quality to the image. The surrounding
              mountains and lush greenery provide a natural frame, enhancing the
              peaceful ambiance. Perfect for evoking feelings of calm and
              serenity, this image is ideal for use in nature-themed projects,
              wellness materials, or any setting where a sense of tranquility is
              desired.
            </p>
            <div className="flex items-center mt-4 space-x-4 text-xs">
              <p className="font-semibold">Categories :</p>
              <div className="flex justify-center items-center space-x-2">
                <span className="bg-gray-800 text-white rounded-lg px-3 py-1">
                  React
                </span>
                <span className="bg-gray-800 text-white rounded-lg px-3 py-1">
                  Javascript
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* comment */}
        <div className="px-2 py-2 m-2  rounded-md border border-gray-300">
          <div className="flex items-center justify-between">
            <h3 className="md:text-sm text-xs ">@garry</h3>
            <div className="flex justify-center items-center space-x-4">
              <p className="md:text-sm text-xs">November 14, 2023</p>
              <p className="md:text-sm text-xs">16:45</p>
              <div className="flex space-x-4 items-center">
                <span className="md:text-xl text-sm md:hover:text-green-600 text-green-600 cursor-pointer">
                  <CiEdit />
                </span>
                <span className="md:text-xl text-sm md:hover:text-red-600 text-red-600 cursor-pointer">
                  <MdOutlineDelete />
                </span>
              </div>
            </div>
          </div>
          <p className="px-4 mt-2 text-xs md:text-sm">nice information</p>
        </div>

        {/* comment */}
        <div className="px-2 py-2 m-2  rounded-md border border-gray-300">
          <div className="flex items-center justify-between">
            <h3 className="md:text-sm text-xs ">@garry</h3>
            <div className="flex justify-center items-center space-x-4">
              <p className="md:text-sm text-xs">November 14, 2023</p>
              <p className="md:text-sm text-xs">16:45</p>
              <div className="flex space-x-4 items-center">
                <span className="md:text-xl text-sm md:hover:text-green-600 text-green-600 cursor-pointer">
                  <CiEdit />
                </span>
                <span className="md:text-xl text-sm md:hover:text-red-600 text-red-600 cursor-pointer">
                  <MdOutlineDelete />
                </span>
              </div>
            </div>
          </div>
          <p className="px-4 mt-2 text-xs md:text-sm">nice information</p>
        </div>

        {/* white a comment */}
        <div className="py-2 m-2">
          <h3 className="text-xs md:text-sm">Submit a comment</h3>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
              type="text"
              placeholder="Write a comment"
              className="border border-gray-400 text-xs md:text-sm p-2 focus:border-green-600 outline-none rounded-md w-full md:w-[80%]"
            />
            <button className="p-1 bg-gray-800 rounded-md text-white md:text-sm text-xs md:w-[20%]">
              Add comment
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
