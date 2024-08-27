import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../useContext/UserContext";
import { url } from "../url";
// import { ImageFolder } from "../url";

export const SinglePost = (props) => {
  const { user } = useContext(UserContext);
  // console.log(user);

  const {
    category,
    createdAt,
    description,
    photo,
    title,
    updatedAt,
    userId,
    username,
    _id,
    imageFilename,
    imagePath,
  } = props;
  // console.log(imagePath);

  // const formattedDate = new Date(createdAt).toLocaleString();
  // const [date, time] = formattedDate.split(",");

  const imageUrl = `${url}/${imagePath}`;

  const dateObject = new Date(createdAt);
  const options = {
    weekday: "long", // M enambahkan nama hari
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = dateObject.toLocaleDateString("en-US", options);
  const formattedTime = dateObject.toLocaleTimeString("en-US");

  return (
    <div className="w-full flex flex-col md:flex-row mt-8 md:space-x-4">
      {/* left */}
      <div className="w-full md:w-[35%] h-[250px] md:h-[400px] flex rounded-md overflow-hidden">
        <img
          // src={imageUrl || photo}
          src={props.imagePath ? imageUrl : photo}
          alt=""
          className="w-full h-full object-contain "
        />
      </div>

      {/* right */}
      <div className="flex flex-col w-full md:w-[65%] space-y-4">
        <Link
          // to={Object.keys(user).length > 0 ? `/posts/post/${_id}` : "/login"}
          to={Object.keys(user).length > 0 ? `/posts/post/${_id}` : "/login"}
        >
          <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
            {title}
          </h1>
        </Link>
        <div className="flex mb-2 text-xs font-semibold text-gray-800 items-center justify-between">
          <p>@{username}</p>
          <div className="flex md:space-x-2 space-x-1">
            <p>{formattedDate}</p>
            <p>{formattedTime}</p>
          </div>
        </div>
        <p className="text-sm md:text-md">
          {description.split(" ").slice(0, 100).join(" ")}{" "}
          <Link
            to={Object.keys(user).length > 0 ? `/posts/post/${_id}` : "/login"}
          >
            <span className="text-xs text-gray-500">...read more</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
