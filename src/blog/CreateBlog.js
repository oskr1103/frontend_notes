import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CreateBlog.css";

const URI = "https://rehobot-notes.herokuapp.com/blogs/";

const CompCreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  //Procedimeinto para guardar un nuevo blog
  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      title: title,
      content: content,
    });
    navigate("/");
  };

  return (
    <div className="container__create">
      <div className="create">
        <h3>Crear Nota</h3>
        <form onSubmit={store}>
          <div className="mb-3">
            <label className="form-label">Título</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              value={title}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contenido</label>
            <textarea
              type="text"
              onChange={(e) => setContent(e.target.value)}
              className="form-control"
              value={content}
            />
          </div>
          <button type="submit" className="btn-notes">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompCreateBlog;
