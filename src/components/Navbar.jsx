import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "../App.css";

export const Navbar = () => {
  const userLoggedIn = false;
  return (
    <div className="flex items-center justify-between px-6  py-4 bg-gray-900 text-white ">
      <h1 className="text-sm md:text-xl font-semibold text-yellow-400">
        <Link to="/">Bloggy</Link>
      </h1>
      <div className="flex justify-center items-center space-x-0 ml-3">
        <p className="m-2 text-sm">
          <BsSearch />
        </p>
        <input
          type="text"
          className="outline-none px-2  w-[150px] border border-black-100 text-gray-800 rounded-lg text-sm md:text-lg md:w-[200px]"
          placeholder="Search a post..."
        />
      </div>
      <div className="flex items-center text-xs md:text-lg justify-center space-x-2 md:space-x-6">
        {userLoggedIn ? (
          <>
            <h3>
              <Link to="/write">Create</Link>
            </h3>
            <h3>
              <Link to="/profile">Profile</Link>
            </h3>
          </>
        ) : (
          <>
            <h3>
              <Link to="/login">Login</Link>
            </h3>
            <h3>
              <Link to="/register">Register</Link>
            </h3>
          </>
        )}
      </div>
    </div>
  );
};
