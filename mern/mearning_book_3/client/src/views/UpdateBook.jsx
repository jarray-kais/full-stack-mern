import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { StoreContext } from '../StoreContext'
import axios from 'axios'

const UpdateBook = () => {
    const navigate = useNavigate()
    const {id}= useParams()
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        pages: 1,
        isAvailable: false,
    });
     const { setTitle } = useContext(StoreContext);
     
     const [errors, setErrors] = useState({
        title: "",
        author: "",
        pages: "",
        general: "",
      });

        useEffect(() =>{
            axios
              .get(`http://localhost:5000/api/${id}`)
              .then((response) => {
                setFormData(response?.data)
                setTitle('Update' + ' ' + response.data.title)
              })
              .catch((err) => {
                if (err.response && err.response.data) {
                  const errorResponse = err.response.data.validationErrors; // Get the errors from err.response.data
                  const errorArr = {}; // Define a temp error array to push the messages in
                  // // Loop through all errors and get the messages
                  for (const key of Object.keys(errorResponse)) {
                    errorArr[key] = errorResponse[key]; // Add the messages to the errorArr
                  }
                  // Set Errors
                  setErrors(errorArr);
                } else {
                  setErrors({ general: "An unexpected error occurred." });
                }
              });
          }, [id,setTitle]);
   
          const handleSubmit = (e)=>{
            e.preventDefault()
            axios.patch(`http://localhost:5000/api/${id}`, {
                title: formData?.title,
                author: formData?.author,
                pages: formData?.pages,
                isAvailable: formData?.isAvailable,
            }).then(()=>{
                alert('update succefully')
                navigate('/')
            })
            .catch((err) => {
              if (err.response && err.response.data) {
                const errorResponse = err.response.data.validationErrors; // Get the errors from err.response.data
                const errorArr = {}; // Define a temp error array to push the messages in
                // // Loop through all errors and get the messages
                for (const key of Object.keys(errorResponse)) {
                  errorArr[key] = errorResponse[key]; // Add the messages to the errorArr
                }
                // Set Errors
                setErrors(errorArr);
              } else {
                setErrors({ general: "An unexpected error occurred." });
              }
            });
          }

  return (
    <div>
        <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={formData?.title}
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
            value={formData?.author}
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
            value={formData?.pages}
            onChange={(e) => {
              setFormData({ ...formData, pages: e.target.value });
              setErrors({ ...errors, pages: "" });
            }}
            min={1}
          />
          {errors.pages && <p className="error">{errors.pages}</p>}
        </div>
        <div className="checkbox-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData?.isAvailable}
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
    </div>
  )
}

export default UpdateBook