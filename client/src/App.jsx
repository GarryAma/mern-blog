import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { SinglePostDetails } from "./pages/SinglePostDetails";
import { CreatePost } from "./pages/CreatePost";
import { EditPost } from "./pages/EditPost";
import { Profile } from "./pages/Profile";
import { UserContextProvider } from "./useContext/UserContext";
import { MyBlog } from "./pages/MyBlog";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts/post/:id" element={<SinglePostDetails />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/myblog/:id" element={<MyBlog />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
