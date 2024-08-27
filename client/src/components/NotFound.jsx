import React from "react";
import image from "../assets/notFound.png";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] space-y-6">
      <img src={image} alt="" className="lg:w-[600px] lg:h-[400px]" />
      <h3 className="text-gray-600">Oopps...Page not found!</h3>
      <Link to={"/"}>
        <button className="text-xs md:text-sm border p-2 rounded-md hover:text-white hover:bg-gray-900 transition-all duration-300">
          Go back to main page
        </button>
      </Link>
    </div>
  );
};
