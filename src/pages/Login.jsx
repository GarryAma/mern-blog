import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-[67.5vh] md:h-[74vh] flex justify-center items-center">
      <div className=" w-[75%] p-2">
        <div className="py-5 flex flex-col">
          <h1 className="font-semibold text-3xl">Welcome back...</h1>
          <h2 className="text-sm font-light">Sign in to continue</h2>
        </div>
        <form className="flex flex-col  space-y-6 w-[95%] mx-auto">
          <div>
            <label htmlFor="username" className="text-sm">
              Username :
            </label>
            <input
              type="text"
              placeholder="Enter text here"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm">
              Password :
            </label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter text here"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            />

            <div className="flex mt-1 space-x-1">
              <label htmlFor="showPassword" className="text-xs">
                Show Password
              </label>
              <input
                type="checkbox"
                className="ransform scale-95"
                onChange={() => setShowPassword((current) => !current)}
              />
            </div>
          </div>

          <button className="p-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200">
            Login
          </button>

          <p className="text-sm transition-all duration-2000">
            New here?
            <Link
              to="/register"
              className="text-gray-600 hover:font-semibold hover:text-black transition-all duration-400"
            >
              {"  "}Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
