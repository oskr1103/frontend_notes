import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./ShowBlogs.css";

const URI = "https://rehobot-notes.herokuapp.com/blogs/";

const CompShowBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs();
  }, []);

  //Procedimiento para obtener los blogs
  const getBlogs = async () => {
    const result = await axios.get(URI);
    setBlogs(result.data.sort((a, b) => b.id - a.id));
    console.log(
      "App desarrollada con NodeJS, Express, ReactJS y MongoDB - Isai Colina"
    );
  };

  //Procedimiento para eliminar un blog
  const deleteBlog = async (id) => {
    await axios.delete(URI + id);
    getBlogs();
  };

  return (
    <div className="container__show">
      <div className="grid-card">
        {blogs.map((blog, index) => (
          <div className="card__show" key={index}>
            <div className="card-header">
              <b>{blog.title}</b>
            </div>
            <div className="card-body">
              <p className="card-text">{blog.content}</p>
              <div className="btn-card">
                <Link to={`/edit/${blog._id}`} className="btn-notesShow">
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button
                  onClick={() => deleteBlog(blog._id)}
                  className="btn-notesShow"
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompShowBlogs;
