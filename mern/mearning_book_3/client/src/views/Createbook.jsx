import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { StoreContext } from "../StoreContext";
import { useNavigate } from "react-router-dom";

const Createbook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    pages: 0,
    isAvailable: false,
  });
  const [errors, setErrors] = useState({
    title: "",
    author: "",
    pages: "",
    name : "",
    general: "",
  });
  const navigate = useNavigate();
  const { setTitle } = useContext(StoreContext);

  useEffect(() => {
    setTitle("Add a book");
    const validateform = () => {
      let newErrors = {};
      //validate for title
      newErrors.title = !formData.title
        ? "Title is required!"
        : formData.title.length < 2
        ? "Title must be at least 2 characters."
        : formData.title.length > 255
        ? "Title must be less than 255 characters."
        : "";
      //validate for author
      newErrors.author = !formData.author
        ? "Author is required!"
        : formData.author.length < 5
        ? "Author must be at least 5 characters."
        : "";
      //validate for pages
      newErrors.pages = !formData.pages
        ? "A book must have some pages"
        : formData.pages < 1
        ? "A book must have at least 1 page"
        : "";

      return setErrors(newErrors);
    };
    validateform();
  }, [setTitle, formData]);

  const validate = () => {
    return Object.values(errors).every((value) => value === "");
  };

  /*  const handlefocus = () => {
    setFocus(true);
  };
  const handleblur = () => {
    setFocus(false);
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/`, {
        title: formData.title,
        author: formData.author,
        pages: formData.pages,
        isAvailble: formData.isAvailable,
      })
      .then(() => {
        alert("Book added successfully");
        setFormData({
          title: "",
          author: "",
          pages: 1,
          isAvailable: false,
        });
        navigate("/");
      })

      .catch((err) => {
        if (err.response && err.response.data) {
          const errorName = err.response.data.name;
          const errorResponse = err.response.data.validationErrors; // Get the errors from err.response.data
          const errorArr = {}; // Define a temp error array to push the messages in
          // // Loop through all errors and get the messages
          for (const key of Object.keys(errorResponse)) {
            errorArr[key] = errorResponse[key]; // Add the messages to the errorArr
          }
          // Set Errors
          setErrors({...errorArr ,name : errorName});
        } else {
          setErrors({ general: "An unexpected error occurred." });
        }
      });
  };
  console.log(errors)
  return (
    <>
    <h2 style={{textAlign : "center", color : "red"}}>{errors?.name}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
              setErrors({ ...errors, title: "" });
            }}
          />
          {errors.title && <p className="error">{errors.title}</p>}
          {/* {!formData.title && focus ? (
            <p className="error">Title is required!</p>
          ) :formData.title.length < 2 && formData.title.length !== 0  ? (
            <p className="error">Title must be at least 2 characters.</p>
          ) : formData.title.length > 255 ? (
            <p className="error">Title must be less than 255 characters.</p>
          ) : errors.title ? (
            <p className="error">{errors.title}</p>
          ) : null} */}
        </div>
        <div>
          <label>Author: </label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) => {
              setFormData({ ...formData, author: e.target.value });
              setErrors({ ...errors, author: "" });
            }}
          />
          {errors.author && <p className="error">{errors.author}</p>}
        </div>
        <div>
          <label>Page: </label>
          <input
            type="number"
            value={formData.pages}
            onChange={(e) => {
              setFormData({ ...formData, pages: e.target.value });
              setErrors({ ...errors, pages: "" });
            }}
            min={0}
          />
          {errors.pages && <p className="error">{errors.pages}</p>}
        </div>
        <div className="checkbox-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.isAvailable}
              onChange={(e) =>
                setFormData({ ...formData, isAvailable: e.target.checked })
              }
            />
            <span className="custom-checkbox"></span>
            Is It Available?
          </label>
        </div>
        {errors.general && <p className="error">{errors.general}</p>}
        <input type="submit" value="Submit" disabled= {!validate()}  />
      </form>
    </>
  );
};

export default Createbook;
