import React from "react";

export const MenuBar = ({ showMenu, userLoggedIn }) => {
  return (
    <div
      className={`bg-gray-900  w-[300px] md:w-[450px] flex flex-col items-start absolute top-[65px] space-y-8 p-4 transition-all duration-200 opacity-95   ${
        showMenu
          ? "right-[0px] opacity-100 "
          : "right-[-300px] md:right-[-450px] opacity-0"
      }`}
    >
      {userLoggedIn ? (
        <>
          <h3 className="text-white text-sm hover:text-orange-500 cursor-pointer ">
            Write
          </h3>
          <h3 className="text-white text-sm hover:text-orange-500 cursor-pointer">
            Profile
          </h3>
          <h3 className="text-white text-sm hover:text-orange-500 cursor-pointer">
            My Blogs
          </h3>
          <h3 className="text-white text-sm hover:text-orange-500 cursor-pointer">
            Logout
          </h3>
        </>
      ) : (
        <>
          <h3 className="text-white text-sm hover:text-orange-500 cursor-pointer">
            Login
          </h3>
          <h3 className="text-white text-sm hover:text-orange-500 cursor-pointer">
            Register
          </h3>
        </>
      )}
    </div>
  );
};
