import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../StoreContext";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../components/LoadingSpinner";
import apiurls from "../URL/url";

const DetailBook = () => {
  const [detail, setDetail] = useState({});
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate();
  const { id } = useParams();
  const { setTitle } = useContext(StoreContext);

  // set the title in the store context

  // Fetch the book details when the component mounts
  useEffect(() => {
    setLoading(true);
    axios
      .get(apiurls.books(id))
      .then((response) => {
        setDetail(response.data)
        setTitle(response.data.title)
        setLoading(false);
      })
      .catch((error) => console.log(error), setLoading(false));
  }, [id,setTitle]);

  //delete the book
  const deleteBook = () => {
    axios
      .delete(apiurls.books(id))
      .then(() => {
        if(window.confirm('Are you sure you want to delete this book?')){
          navigate(`/`);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
    {loading ? (<LoadingSpinner />): (
      <>
          <Helmet>
        <title>{`${detail?.title} book detail's`} </title>
      </Helmet>
     <div className="book-detail-container">
      <div className="book-detail-content">
        <h2>{detail.title}</h2>
        <p>{detail.author}</p>
        <p>Page Count : {detail.pages}</p>
        <button onClick={() => deleteBook()}  className="btn">
          Borrow
        </button>
      </div>
    </div>
      </>
    )}
 
    </>
   
  );
};

export default DetailBook;
