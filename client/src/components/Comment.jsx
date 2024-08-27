import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { url } from "../url";
import { useContext } from "react";
import { UserContext } from "../useContext/UserContext";

export const Comment = ({ singleComment, post, fetchComments }) => {
  console.log(singleComment);
  const { user } = useContext(UserContext);
  console.log(post?.userId);
  console.log(user.data?._id);
  const dateObject = new Date(singleComment?.createdAt);
  const options = {
    weekday: "long", // M enambahkan nama hari
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = dateObject.toLocaleDateString("en-US", options);
  const formattedTime = dateObject.toLocaleTimeString("en-US");

  const handleDeleteComment = async () => {
    try {
      const res = await axios.delete(
        `${url}/api/comments/${singleComment._id}`,
        {
          withCredentials: true,
        }
      );
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-2 py-2 m-2  rounded-md border border-gray-300">
      <div className="flex items-center justify-between">
        <h3 className="md:text-sm text-xs ">@{singleComment?.author}</h3>
        <div className="flex justify-center items-center space-x-4">
          <p className="md:text-sm text-xs">{formattedDate}</p>
          <p className="md:text-sm text-xs">{formattedTime}</p>
          <div className="flex space-x-4 items-center">
            {/* <span className="md:text-xl text-sm md:hover:text-green-600 text-green-600 cursor-pointer">
              <CiEdit />
            </span> */}
            {user.data?._id === singleComment.userId ? (
              <span
                className="md:text-xl text-sm md:hover:text-red-600 text-red-600 cursor-pointer"
                onClick={handleDeleteComment}
              >
                <MdOutlineDelete />
              </span>
            ) : null}
          </div>
        </div>
      </div>
      <p className="px-4 mt-2 text-xs md:text-sm">{singleComment?.comment}</p>
    </div>
  );
};
