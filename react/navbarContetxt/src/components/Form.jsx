import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
const Form = () => {
    const {setName} = useContext(StoreContext)
    const handleChange = (event) => {
        setName(event.target.value);
    };
  return (
    <div>
    <label htmlFor="nameInput" style={{ display: 'block', marginBottom: '0.5rem' }}>
        Enter your name:
    </label>
    <input
        id="nameInput"
        type="text"
        placeholder="Type your name..."
        onChange={handleChange}
        style={{ padding: '0.5rem', width: '100%' }}
    />
</div>
  )
}

export default Form