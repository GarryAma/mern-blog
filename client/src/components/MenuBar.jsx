import React, { useContext } from "react";
import { UserContext } from "../useContext/UserContext";
import { Link } from "react-router-dom";

export const MenuBar = ({ showMenu }) => {
  const { user, handleLogout } = useContext(UserContext);
  return (
    <div
      className={`bg-gray-900  w-[300px] md:w-[450px] flex flex-col items-start z-10 absolute top-[65px] space-y-8 p-4 transition-all duration-200 opacity-95 ${
        showMenu
          ? "right-[0px] opacity-100 "
          : "right-[-300px] md:right-[-450px] opacity-0"
      }`}
    >
      {Object.keys(user).length > 0 ? (
        <>
          <Link to="/create-post">
            <h3 className="text-white text-sm hover:text-orange-500 cursor-pointer ">
              Write
            </h3>
          </Link>
          <Link to={`/profile/${user?.data?._id}`}>
            <h3 className="text-white text-sm hover:text-orange-500 cursor-pointer">
              Profile
            </h3>
          </Link>
          <Link to={`/myblog/${user.data?._id}`}>
            <h3 className="text-white text-sm hover:text-orange-500 cursor-pointer">
              My Blogs
            </h3>
          </Link>
          <h3
            className="text-white text-sm hover:text-orange-500 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </h3>
        </>
      ) : (
        <>
          <Link to={"/login"}>
            <h3 className="text-white text-sm hover:text-orange-500 cursor-pointer">
              Login
            </h3>
          </Link>
          <Link to={"/register"}>
            <h3 className="text-white text-sm hover:text-orange-500 cursor-pointer">
              Register
            </h3>
          </Link>
        </>
      )}
    </div>
  );
};
