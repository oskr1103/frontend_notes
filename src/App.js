import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CompShowBlogs from "./components/showblogs/ShowBlogs";
import CompCreateBlog from "./components/createblogs/CreateBlog";
import CompEditBlog from "./components/editblogs/EditBlog";
import Headernotes from "./components/header/Headernotes";
import Footer from "./components/Footer/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
