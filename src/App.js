import "./App.css";

import CompShowBlogs from "./blog/ShowBlogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompCreateBlog from "./blog/CreateBlog";
import CompEditBlog from "./blog/EditBlog";
import Headernotes from "./blog/Headernotes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headernotes />
        <Routes>
          <Route path="/" element={<CompShowBlogs />} />
          <Route path="/create" element={<CompCreateBlog />} />
          <Route path="/edit/:id" element={<CompEditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
