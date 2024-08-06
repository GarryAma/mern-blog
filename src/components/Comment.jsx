import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

export const Comment = () => {
  return (
    <div className="px-2 py-2 m-2  rounded-md border border-gray-300">
      <div className="flex items-center justify-between">
        <h3 className="md:text-sm text-xs ">@garry</h3>
        <div className="flex justify-center items-center space-x-4">
          <p className="md:text-sm text-xs">November 14, 2023</p>
          <p className="md:text-sm text-xs">16:45</p>
          <div className="flex space-x-4 items-center">
            <span className="md:text-xl text-sm md:hover:text-green-600 text-green-600 cursor-pointer">
              <CiEdit />
            </span>
            <span className="md:text-xl text-sm md:hover:text-red-600 text-red-600 cursor-pointer">
              <MdOutlineDelete />
            </span>
          </div>
        </div>
      </div>
      <p className="px-4 mt-2 text-xs md:text-sm">nice information</p>
    </div>
  );
};
