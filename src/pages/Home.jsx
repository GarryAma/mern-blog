import React from "react";
import { SinglePost } from "../components/SinglePost";

export const Home = () => {
  return (
    <div className="w-[90%] m-auto">
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </div>
  );
};
