import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./ShowBlogs.css";

const URI = "https://rehobot-notes.herokuapp.com/blogs/";

const CompShowBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsNotas, setBlogsNotas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  //Procedimiento para obtener los blogs
  const getBlogs = async () => {
    const result = await axios.get(URI);
    setBlogs(result.data);
    setBlogsNotas(result.data);
    console.log(
      "App desarrollada con NodeJS, Express, ReactJS y MongoDB - Isai Colina"
    );
  };

  //Procedimiento para eliminar un blog
  const deleteBlog = async (id) => {
    await axios.delete(URI + id);
    getBlogs();
  };

  const handlerChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    console.log(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    let resultado = blogsNotas.filter((elemento) => {
      if (
        elemento.title
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.content
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      } else {
        return null;
      }
    });
    setBlogs(resultado);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="container__show">
      <div className="input__search">
        <input
          value={busqueda}
          placeholder="Buscar Nota"
          onChange={handlerChange}
        />
      </div>
      <div className="grid-card">
        {blogs &&
          blogs.map((blog, index) => (
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
