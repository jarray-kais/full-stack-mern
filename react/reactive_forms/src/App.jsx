import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Welcome. Please submit the form");
  const [isactive, setIsActive] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("Thank you for submitting the form!");
    setIsActive(true);
   
  };

  return (
    <>
      <h1>{title} </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>firstName: </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          {formData.firstName && formData.firstName.length < 2 ? (
            <p className="error">
              First name needs to be more than 2 characters
            </p>
          ) : (
            " "
          )}
        </div>
        <div>
          <label>lastName: </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          {formData.lastName && formData.lastName.length < 2 ? (
            <p className="error">
              Last name needs to be more than 2 characters
            </p>
          ) : (
            " "
          )}
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {formData.email && formData.email.length < 8 ? (
            <p className="error">email needs to be more than 8 characters</p>
          ) : (
            " "
          )}
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {formData.password && formData.password.length < 8 ? (
            <p className="error">password needs to be more than 8 characters</p>
          ) : (
            " "
          )}
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          {formData.confirmPassword &&
          formData.password !== formData.confirmPassword ? (
            <p className="error">Confirm Password does not match</p>
          ) : (
            " "
          )}
        </div>

        <input type="submit" value="Submit" />
      </form>
     
     { isactive ? (
     <>
     <h3>Users</h3>
     {  Object.values(formData).map((item, index) =>(
        <p key={index}>{item}</p>
      ))}
     </>
    
     ):null
    }
    </>
  );
}

export default App;
