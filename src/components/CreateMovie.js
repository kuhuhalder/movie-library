import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateMovie = (props) => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: "",
    review: "",
  });

  const onChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/movies", movie)
      .then((res) => {
        setMovie({
          title: "",
          review: "",
        });
        navigate("/");
      })
      .catch((err) => {
        console.log("Error in CreateMovie!");
      });
  };

  return (
    <div className="CreateMovie">
      <div className="container">
        <div className="row">
          <div>
            <br />
            <Link to="/">
              Show Movie List
            </Link>
          </div>
          <div>
            <h1>Add Movie</h1>
            <p>Create new Movie</p>

            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Movie"
                  name="title"
                  className="form-control"
                  value={movie.title}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Review"
                  name="review"
                  className="form-control"
                  value={movie.review}
                  onChange={onChange}
                />
              </div>

              <input
                type="submit"
                className="btn btn-outline-warning btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMovie;
