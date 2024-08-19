import React, { useContext } from "react";
import { SinglePost } from "../components/SinglePost";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { UserContext } from "../useContext/UserContext";

export const Home = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <Navbar />
      <div className="w-[90%] m-auto">
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
      <Footer />
    </>
  );
};
