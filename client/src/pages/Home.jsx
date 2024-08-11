import React from "react";
import { SinglePost } from "../components/SinglePost";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Home = () => {
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
