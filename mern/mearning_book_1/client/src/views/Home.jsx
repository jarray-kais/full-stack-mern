import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/`)
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [setBook]);

  const DetailHandlers = (id) => {
   navigate(`/books/${id}`)
  };

  return (
    <div className="container">
      <table className="tableList">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Page count</th>
            <th>Availble</th>
            <th>Book Page </th>
          </tr>
        </thead>
        <tbody>
          {book?.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.pages}</td>
              <td>{book.isAvailble ? "Yes" : "NO"}</td>
              <td>
                  <button className="btn" onClick={()=>DetailHandlers(book._id)}>Book Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
