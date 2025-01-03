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
    general: "",
  });

  const navigate = useNavigate();

  const { setTitle } = useContext(StoreContext);

  useEffect(()=>{
    setTitle("Add a book");
  },[setTitle])

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
          const errorResponse = err.response.data.errors;
          console.log(errorResponse); // Get the errors from err.response.data
          const errorArr = {}; // Define a temp error array to push the messages in
          for (const key of Object.keys(errorResponse)) {
            // Loop through all errors and get the messages
            errorArr[key] = errorResponse[key].message; // Add the messages to the errorArr
          }
          // Set Errors
          setErrors(errorArr);
        } else {
          setErrors({ general: "An unexpected error occurred." });
        }
      });
  };

  return (
    <>
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
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Createbook;
