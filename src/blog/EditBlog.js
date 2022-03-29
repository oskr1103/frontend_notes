import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./CreateBlog.css";

const URI = "https://rehobot-notes.herokuapp.com/blogs/";

const CompEditBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  //Procedimiento para actualizares un blog
  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      title: title,
      content: content,
    });
    navigate("/");
  };

  useEffect(() => {
    getBlogById();
  }, []);

  const getBlogById = async () => {
    const res = await axios.get(URI + id);
    setTitle(res.data.title);
    setContent(res.data.content);
  };

  return (
    <div className="container__create">
      <div className="create">
        <h3>Editar Nota</h3>
        <form onSubmit={update}>
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
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompEditBlog;
