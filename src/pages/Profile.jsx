import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProfilePost } from "../components/ProfilePost";

export const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="px-8  md:mt-8 flex md:flex-row flex-col-reverse md:space-x-4">
        {/* left */}
        <div className="flex flex-col md:w-[80%] w-full ">
          <h1 className="text-lg font-semibold md:mb-2">Your posts :</h1>
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
        </div>
        {/* right */}

        <div className="flex flex-col md:w-[20%] h-[100%] w-full mt-4 md:m-0 mb-8  md:sticky md:top-16">
          <h1 className="text-lg font-semibold md:mb-2 ">Profile</h1>
          <input
            type="text"
            placeholder="your username"
            className="outline-none p-2 border border-gray-400 rounded-md text-xs md:text-sm mt-2"
          />
          <input
            type="text"
            placeholder="your email"
            className="outline-none p-2 border border-gray-400 rounded-md text-xs md:text-sm mt-2"
          />
          <input
            type="password"
            placeholder="your password"
            className="outline-none p-2 border border-gray-400 rounded-md text-xs md:text-sm mt-2"
          />
          <div className="flex items-center space-x-4 mt-2">
            <button className="font-semibold p-1 border border-gray-400 text-xs md:text-sm rounded-md bg-gray-900 text-white">
              update
            </button>
            <button className="font-semibold p-1 border border-gray-400 text-xs md:text-sm rounded-md bg-gray-900 text-white">
              delete
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
