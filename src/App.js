import logo from "./assets/img/logo.svg";
import "./App.css";

import CompShowBlogs from "./blog/ShowBlogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompCreateBlog from "./blog/CreateBlog";
import CompEditBlog from "./blog/EditBlog";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Notes</h4>
      </header>
      <BrowserRouter>
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
