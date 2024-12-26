import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import BoxForm from "./components/BoxForm";

function App() {
  const [component, setComponent] = useState([]);
  // Add the component to the list of components
  const addBox = (color, pixel) => {
    setComponent((prevcomponent) => [
      ...prevcomponent,
      { color: color, pixel: pixel },
    ]);
  };
  //Remove the component from the DOM
  const Remove = (index) => {
    setComponent((prevcomponent) =>
      prevcomponent.filter((_, i) => i !== index)
    );
  };
  console.log(component);

  return (
    <>
      <BoxForm addBox={addBox} />
      <Box component={component} Remove={Remove} />
    </>
  );
}

export default App;
