import { useState } from "react";
// import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-6  py-4 bg-gray-900 text-white ">
        <h1 className="text-lg md:text-xl font-semibold text-yellow-400">
          <Link to="/">Bloggy</Link>
        </h1>
        <h3 className="text-sm px-2 py-1 border rounded-md border-yellow-500">
          <Link to="/register">Register</Link>
        </h3>
      </div>
      <div className="w-full md:w-[60%] md:mx-auto h-[70.5vh] md:h-[74vh] flex justify-center items-center">
        <div className=" w-[75%] p-2">
          <div className="py-5 flex flex-col">
            <h1 className="font-semibold text-3xl">Welcome back...</h1>
            <h2 className="text-sm font-light">Sign in to continue</h2>
          </div>
          <form className="flex flex-col  space-y-4 w-[95%] mx-auto">
            <div>
              <label htmlFor="username" className="text-sm">
                Email :
              </label>
              <input
                type="text"
                placeholder="Enter email"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm">
                Password :
              </label>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
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
      <Footer />
    </>
  );
};
