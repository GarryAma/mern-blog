import React, { useContext, useEffect, useState } from "react";
import { SinglePost } from "../components/SinglePost";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { UserContext } from "../useContext/UserContext";
import axios from "axios";
import { url } from "../url";
import { useLocation, useParams } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { SkeletonCard } from "../components/Skeleton";

export const MyBlog = () => {
  //   const params = useParams();
  //   console.log(params);
  const { user } = useContext(UserContext);
  // console.log(user);
  const path = useLocation();
  console.log(path);
  const { search } = path;

  // console.log(user);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(posts);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${url}/api/posts/user/${user?.data?._id}`,
        {
          withCredentials: true,
        }
      );
      // console.log(response.data.data);
      setPosts(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [user?.data?._id]);
  return (
    <div>
      <Navbar />
      <div className="w-[90%]  m-auto">
        {isLoading ? (
          <SkeletonCard />
        ) : (
          <>
            {posts.length === 0 ? (
              <NotFound />
            ) : (
              posts.map((singlePost) => (
                <SinglePost {...singlePost} key={singlePost._id} />
              ))
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};
