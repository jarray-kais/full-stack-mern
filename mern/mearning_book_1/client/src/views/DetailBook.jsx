import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailBook = () => {
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch the book details when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/${id}`)
      .then((response) => setDetail(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  //delete the book
  const deleteBook = () => {
    axios
      .delete(`http://localhost:5000/api/${id}`)
      .then(() => {
        console.log("book deleted successfully");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="book-detail-container">
      <div className="book-detail-content">
        <h2>{detail.title}</h2>
        <p>{detail.author}</p>
        <p>Page Count : {detail.pages}</p>
        <button onClick={() => deleteBook()} className="btn">Borrow</button>
      </div>
    </div>
  );
};

export default DetailBook;
