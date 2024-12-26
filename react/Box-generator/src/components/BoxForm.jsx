import { useState } from 'react';

const BoxForm = (props) => {
    const {addBox} = props
      const [color, setColor] = useState("");
      const [pixel, setPixel] = useState("");
      // Add the component to the list of components
      const handleAddBox = (e) => {
        e.preventDefault();
        addBox(color ,pixel)
        setColor("");
        setPixel("");
      };
  return (
    <div className="box-container">
        <h1>Box Generator</h1>
        <form onSubmit={handleAddBox}>
        <div>
          <label>Color :</label>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <div>
          <label>Pixel :</label>
          <input type="text" value={pixel}  onChange={(e) => setPixel(e.target.value)} />
        </div>
        <button type='submit'>Add</button>
        </form>
         
    </div>
  )
}

export default BoxForm