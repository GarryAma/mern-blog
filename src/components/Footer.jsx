import React from "react";

export const Footer = () => {
  return (
    <div className="mt-8 w-full bg-gray-900 px-8 flex justify-between text-xs md:text-md py-8">
      <div className="flex flex-col text-white space-y-2">
        <p>Featured Blogs</p>
        <p>Most Viewed</p>
        <p>Readers Choice</p>
      </div>

      <div className="flex flex-col text-white space-y-2 ">
        <p>Forum</p>
        <p>Supports</p>
        <p>Recent Posts</p>
      </div>

      <div className="flex flex-col text-white space-y-2">
        <p>Privacy Policy</p>
        <p>About Us</p>
        <p>Terms & Conditions</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};
