import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";

import "../App.css";
import { MenuBar } from "./MenuBar";
import { useContext, useState } from "react";
import { UserContext } from "../useContext/UserContext";
import { url } from "../url";
import axios from "axios";

export const Navbar = () => {
  // const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [bar, setBar] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log(user);

  const showMenuHandler = () => {
    setShowMenu((current) => !current);
  };

  return (
    <div className="relative flex items-center justify-between px-6  py-4 bg-gray-900 text-white ">
      <h1 className="text-sm md:text-xl font-semibold text-yellow-400">
        <Link to="/">Bloggy</Link>
      </h1>
      <div className="flex justify-center items-center space-x-0 ml-3">
        <p className="m-2 text-sm">
          <BsSearch />
        </p>
        <input
          type="text"
          className="outline-none px-2 py-1  w-[150px] border border-black-100 text-gray-800 rounded-lg text-xs md:text-sm md:w-[200px]"
          placeholder="Search a post..."
        />
      </div>
      <div
        className="hidden md:flex items-center text-xs font-light  justify-center space-x-2 md:text-sm md:space-x-6"
        onClick={showMenuHandler}
      >
        {Object.keys(user).length > 0 ? (
          <>
            <h3>
              <Link to="/write">Write</Link>
            </h3>
            <span
              className="cursor-pointer text-xl"
              onClick={() => setBar((current) => !current)}
            >
              {bar ? <HiBars3 /> : <IoClose />}
            </span>
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
      <div className="md:hidden text-xl" onClick={showMenuHandler}>
        <span
          className="cursor-pointer "
          onClick={() => setBar((current) => !current)}
        >
          {bar ? <HiBars3 /> : <IoClose />}
        </span>
      </div>
      <MenuBar showMenu={showMenu} />
    </div>
  );
};
