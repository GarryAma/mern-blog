import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { Comment } from "../components/Comment";
import axios from "axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { url } from "../url";
import { UserContext } from "../useContext/UserContext";
import { SkeletonCard } from "../components/Skeleton";

export const SinglePostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  // console.log(comments);

  const imageUrl = post && `${url}/${post.imagePath}`;

  // console.log(post);
  // console.log(user);
  // console.log(comments);

  const dateObject = new Date(post?.createdAt);
  const options = {
    weekday: "long", // M enambahkan nama hari
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = dateObject.toLocaleDateString("en-US", options);
  const formattedTime = dateObject.toLocaleTimeString("en-US");

  const handleDelete = async () => {
    const result = window.confirm("are you sure you want to delete this post?");

    if (result) {
      try {
        await axios.delete(`${url}/api/posts/${id}`, {
          withCredentials: true,
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };

  const fetchPost = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${url}/api/posts/${id}`, {
        withCredentials: true,
      });
      // console.log(response.data.data);
      setPost(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  };

  const fetchComments = async () => {
    try {
      console.log("fetch comment jalan");
      const response = await axios.get(`${url}/api/comments/post/${id}`);
      console.log(response.data.allCommentsForEachPost);
      setComments(response.data.allCommentsForEachPost);
    } catch (error) {}
  };

  const handlePostComment = async () => {
    try {
      const commentObj = {
        comment,
        author: user.data.username,
        postId: id,
        userId: user.data._id,
      };

      const response = await axios.post(
        `${url}/api/comments/create`,
        commentObj,
        { withCredentials: true }
      );
      console.log(response);

      fetchComments();
      setComment("");
      // window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
    // fetchComments();
  }, [id]);

  useEffect(() => {
    // fetchPost();
    fetchComments();
  }, [id]);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <SkeletonCard />
      ) : (
        <div className="md:h-[100%] p-8">
          <div className="w-full flex flex-col space-y-2 md:flex-row mt-8 md:space-x-4 p-2">
            {/* left */}
            <div className="w-full md:w-[35%] h-[250px] md:h-[400px] flex rounded-md overflow-hidden">
              <img
                // src={imageUrl || post?.photo}
                src={post?.imagePath ? imageUrl : post?.photo}
                alt=""
                className="w-full h-full md:object-contain object-fill "
              />
            </div>

            {/* right */}
            <div className="flex flex-col md:w-[65%] space-y-4">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
                  {post?.title}
                </h1>
                {post && user.data?._id === post?.userId && (
                  <div className="flex space-x-4 items-center">
                    <Link to={`/edit-post/${id}`}>
                      <span className="text-xl md:hover:text-green-600 text-green-600 cursor-pointer">
                        <CiEdit />
                      </span>
                    </Link>
                    <span
                      className="text-xl md:hover:text-red-600 text-red-600 cursor-pointer"
                      onClick={handleDelete}
                    >
                      <MdOutlineDelete />
                    </span>
                  </div>
                )}
              </div>
              <div className="flex mb-2 text-sm font-semibold text-gray-800 items-center justify-between">
                <p>@{post?.username}</p>
                <div className="flex md:space-x-2 space-x-1">
                  <p>{formattedDate}</p>
                  <p>{formattedTime}</p>
                </div>
              </div>
              <p className="text-xs md:text-sm">{post?.description}</p>
              <div className="flex items-center mt-4 space-x-4 text-xs">
                <p className="font-semibold">Categories :</p>
                <div className="flex justify-center items-center space-x-2">
                  {post?.categories?.map((single, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-white rounded-lg px-3 py-1"
                    >
                      {single}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* comment */}
          {comments.length > 0 &&
            comments.map((singleComment, i) => (
              <Comment
                singleComment={singleComment}
                key={i}
                post={post}
                fetchComments={fetchComments}
              />
            ))}

          {/* write a comment */}
          <div className="py-2 m-2">
            <h3 className="text-xs md:text-sm">Submit a comment</h3>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <input
                type="text"
                placeholder="Write a comment"
                className="border border-gray-400 text-xs md:text-sm p-2 focus:border-green-600 outline-none rounded-md w-full md:w-[80%]"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className="p-1 bg-gray-800 rounded-md text-white md:text-sm text-xs md:w-[20%]"
                onClick={handlePostComment}
              >
                Add comment
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};
