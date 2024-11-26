import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

function App() {
  const [component, setComponent] = useState([]);
  const [color, setColor] = useState("");
  const [pixel, setPixel] = useState("");
  // Add the component to the list of components
  const handleAddBox = () => {
    setComponent((prevcomponent) => [
      ...prevcomponent,
      { color: color, pixel: pixel },
    ]);
  };
  //Remove the component from the DOM
  const handleRemove = (index) => {
    setComponent((prevcomponent) =>
      prevcomponent.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <div className="box-container">
        <h1>Box Generator</h1>
        <div>
          <label>Color :</label>
          <input type="text" onChange={(e) => setColor(e.target.value)} />
        </div>
        <div>
          <label>Pixel :</label>
          <input type="text" onChange={(e) => setPixel(e.target.value)} />
        </div>
        <button onClick={handleAddBox}>Add</button>
      </div>
      <div className="boxes">
        {component?.map((component, index) => (
          <div key={index} className="box_cont">
            <i
              style={{ cursor: "pointer", margin: "10px" }}
              className="fa-solid fa-xmark"
              onClick={() => handleRemove(index)}
            ></i>
            <Box color={component.color} pixel={component.pixel} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
