import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [box, setBox] = useState([]);

  const handleAdd = () => {
    setBox((box) => [...box, { input: input, ischecked: false }]);
  };
  const handleCheckbox = (index) => {
    setBox((prevBox) =>
      prevBox.map((item, i) =>
        i === index ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handledelete = (index) => {
    setBox((box) => box.filter((_, i) => i !== index));
  };

  console.log(box);

  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}> Add </button>
      </div>

      {box?.map((box, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <p
            style={{
              margin: "0 10px",
              textDecoration: box.isChecked ? "line-through" : "none",
            }}
          >
            {box.input}
          </p>
          <input type="checkbox" checked={box.isChecked} onChange={() => handleCheckbox(index)} />
          <button onClick={() => handledelete(index)}>delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
