import styles from "../styles/error.module.css";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  const handleNav = () => {
    navigate("/");
  };
  return (
    <div className={styles.container_error}>
      <div>
        <img src="/src/images/error.svg" alt="error" className={styles.img} />
      </div>
      <div className={styles.body}>
        <p className={styles.title}>404 , Page not founds</p>
        <p className={styles.parag}>
          Something went wrong. It looks like your request could not be found.
          It seems that the link is broken or the page has been removed.
        </p>

        <div className={styles.group_btn}>
          <button onClick={handleClick} className={styles.btn}>
            <i
              style={{ width: "20px", height: "20px" }}
              className="fa-solid fa-arrow-left"
            ></i>{" "}
            Go Back
          </button>
          <button onClick={handleNav} className={styles.btn}>
            <i className="fa-solid fa-house"></i> Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
