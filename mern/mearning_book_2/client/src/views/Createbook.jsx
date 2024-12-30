import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { StoreContext } from "../StoreContext";
import { useNavigate } from "react-router-dom";

const Createbook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    pages: 1,
    isAvailble: false,
  });
  const navigate = useNavigate()

  const {setTitle} = useContext(StoreContext)
  setTitle("Add a book")


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/`, {
        title: formData.title,
        author: formData.author,
        pages: formData.pages,
        isAvailble: formData.isAvailble,
      })
      .then(() => {
        alert("Book added successfully")
        setFormData({
          title: "",
          author: "",
          pages: 1,
          isAvailble: false,
        })
        navigate('/')
      })

      .catch((err) => console.log(err));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div>
          <label>Author: </label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
          />
        </div>
        <div>
          <label>Page: </label>
          <input
            type="number"
            value={formData.pages}
            onChange={(e) =>
              setFormData({ ...formData, pages: e.target.value })
            }
            min={1}
          />
        </div>
        <div className="checkbox-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.isAvailble}
              onChange={(e) =>
                setFormData({ ...formData, isAvailble: e.target.checked })
              }
            />
            <span className="custom-checkbox"></span>
            Is It Available?
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Createbook;
