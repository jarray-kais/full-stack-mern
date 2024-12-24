import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../StoreContext";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../components/LoadingSpinner";
import apiurls from "../URL/url";

const Home = () => {
  const [book, setBook] = useState([]);
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();
    const {setTitle} = useContext(StoreContext)
    console.log(import.meta.env.API_URL)
  useEffect(() => {
    setLoading(true);
    axios
      .get(apiurls.Allbooks)
      .then((res) => {
        setBook(res.data);
        setTitle("Book Catalog")
        setLoading(false);
      })
      .catch((err) => console.log(err));
      setLoading(false);
  }, [setBook,setTitle]);

  const DetailHandlers = (id) => {
   navigate(`/${id}/detail`)
  };

  return (
    <>
    <Helmet>
      
      <title>Home - My App</title>
    </Helmet>
    {
      loading ? (<LoadingSpinner />) :(
        <>
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
              <td>{book.isAvailble ? "Yes" : "NO"} | <Link to={`/update/${book._id}`}>Edit</Link></td>
              <td>
                  <button className="btn" onClick={()=>DetailHandlers(book._id)}>Book Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </>
      )
    }
    
    </>
    
  );
};

export default Home;
