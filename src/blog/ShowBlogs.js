import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/blogs/";

const CompShowBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs();
  }, []);

  //Procedimiento para obtener los blogs
  const getBlogs = async () => {
    const result = await axios.get(URI);
    setBlogs(result.data);
  };

  //Procedimiento para eliminar un blog
  const deleteBlog = async (id) => {
    await axios.delete(URI + id);
    getBlogs();
  };

  return (
    <div className="container">
      <Link to="/create" className="btn btn-primary my-2">
        <i className="fa-solid fa-plus"></i> Crear Nota
      </Link>

      <div className="grid-card">
        {blogs.map((blog) => (
          <div className="card">
            <div className="card-header">
              <b>{blog.title}</b>
            </div>
            <div className="card-body">
              {/* <h5 className="card-title">Special title treatment</h5> */}
              <p className="card-text">{blog.content}</p>
              <div className="btn-card">
                <Link to={`/edit/${blog.id}`} className="btn btn-info">
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button
                  onClick={() => deleteBlog(blog.id)}
                  className="btn btn-danger"
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
