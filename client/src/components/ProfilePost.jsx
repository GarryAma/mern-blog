import { useLocation } from "react-router-dom";
import { url } from "../url";

export const ProfilePost = ({ single }) => {
  const { imagePath } = single;

  const imageUrl = `${url}/${imagePath}`;
  const dateObject = new Date(single.createdAt);
  const options = {
    weekday: "long", // M enambahkan nama hari
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = dateObject.toLocaleDateString("en-US", options);
  const formattedTime = dateObject.toLocaleTimeString("en-US");
  console.log(single.photo);
  // console.log(imageUrl);

  return (
    <div className="w-full flex flex-col md:flex-row mt-8 md:space-x-4">
      {/* left */}
      <div className="w-full md:w-[35%] h-[250px] md:h-[400px] flex rounded-md overflow-hidden">
        <img
          src={imagePath ? imageUrl : single.photo}
          alt=""
          className="w-full object-cover"
        />
      </div>

      {/* right */}
      <div className="flex flex-col w-full md:w-[65%]  space-y-4">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          {single.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-800 items-center justify-between">
          <p>@{single.username}</p>
          <div className="flex md:space-x-2 space-x-1">
            <p> {formattedDate}</p>
            <p>{formattedTime}</p>
          </div>
        </div>
        <p className="text-xs md:text-sm">{single.description}</p>
      </div>
    </div>
  );
};
