import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProfilePost } from "../components/ProfilePost";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../useContext/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../url";
import axios from "axios";

export const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userPost, setUserPost] = useState([]);

  const { user, handleLogout } = useContext(UserContext);
  // console.log(user?.data?._id);
  // console.log(user);
  console.log(userPost);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${url}/api/user/${user.data._id}`);
      console.log(response);
      setUsername(response.data.data.username);
      setEmail(response.data.data.email);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateUser = async () => {
    try {
      const response = await axios.patch(
        `${url}/api/user/${user.data._id}`,
        { username, email },
        { withCredentials: true }
      );
      setMessage("User Profile has been updated successfully");
      setUsername("");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUser = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete your profile?"
    );
    if (confirm) {
      try {
        const response = await axios.delete(
          `${url}/api/user/${user?.data?._id}`,
          { withCredentials: true }
        );
        console.log("user has been deleted");
        handleLogout();
        navigate("/");
      } catch (error) {}
    }
  };

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `${url}/api/posts/user/${user?.data?._id}`,
        {
          withCredentials: true,
        }
      );
      console.log("post for this user is succesfully fetch");
      console.log(response);
      setUserPost(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchPost();
  }, [user?.data?._id]);

  return (
    <>
      <Navbar />
      <div className="px-8  md:mt-8 flex md:flex-row flex-col-reverse md:space-x-4">
        {/* left */}
        <div className="flex flex-col md:w-[80%] w-full ">
          <h1 className="text-lg font-semibold md:mb-2">Your posts :</h1>
          {userPost.map((single) => (
            <ProfilePost key={single._id} single={single} />
          ))}
          {/* <ProfilePost />
          <ProfilePost />
          <ProfilePost /> */}
        </div>

        {/* right */}
        <div className="flex flex-col md:w-[20%] h-[100%] w-full mt-4 md:m-0 mb-8  md:sticky md:top-16">
          <h1 className="text-lg font-semibold md:mb-2 ">Profile</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="your username"
            className="outline-none p-2 border border-gray-400 rounded-md text-xs md:text-sm mt-2"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="your email"
            className="outline-none p-2 border border-gray-400 rounded-md text-xs md:text-sm mt-2"
          />
          {/* <input
            type="password"
            placeholder="your password"
            className="outline-none p-2 border border-gray-400 rounded-md text-xs md:text-sm mt-2"
          /> */}
          <div className="flex items-center space-x-4 mt-2">
            <button
              onClick={handleUpdateUser}
              className="py-1 px-3 border border-gray-400 text-xs md:text-sm rounded-md bg-gray-900 text-white"
            >
              update
            </button>
            <button
              onClick={handleDeleteUser}
              className="py-1 px-3 border border-gray-400 text-xs md:text-sm rounded-md bg-gray-900 text-white"
            >
              delete
            </button>
          </div>
          {message && <p className="text-xs text-green-700 mt-1">{message}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};
