import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { SinglePostDetails } from "./pages/SinglePostDetails";
import { CreatePost } from "./pages/CreatePost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts/post/:id" element={<SinglePostDetails />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </>
  );
}

export default App;
