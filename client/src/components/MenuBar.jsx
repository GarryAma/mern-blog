import React from "react";

export const MenuBar = () => {
  return (
    <div className="bg-red-400 w-[200px] flex flex-col items-start absolute top-0 left-0">
      <h3 className="text-black text-md hover:text-orange-200">Login</h3>
      <h3 className="text-black text-md hover:text-orange-200">Register</h3>
    </div>
  );
};
