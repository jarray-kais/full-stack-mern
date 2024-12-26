import { useReducer, useState } from "react";
import "./App.css";

const initialiseState ={
  input: "",
  box: [],
}
const reducer =(state , action)=>{
  switch(action.type){
    case 'ADD_ITME':
      return {
        ...state,
        box : [...state.box , action.payload]
      }
      case 'REMOVE_ITME':
        return {
         ...state,
          box : state.box.filter((_, i) => i !== action.payload)
        }
      case 'TOGGLE_CHECKED':
        return {
          ...state ,
           box : state.box.map((item, i) =>
              i === action.payload? {...item, isChecked:!item.isChecked} : item
            )
        }
        default:
          return state; 
  }
}
function App() {
  const [state , dispatch]= useReducer(reducer , initialiseState)
  const [input, setInput] = useState("");
  const box = state.box
  const handleAdd =(e)=>{
    e.preventDefault()
    dispatch({
      type : 'ADD_ITEM',
      payload : {
        input : state.input,
        isChecked : false,
      }
    })
    setInput('')
  }
  const handleCheckbox =(index)=>{
    dispatch({
      type : 'TOGGLE_CHECKED',
      payload : index
    })
  }
  const handledelete =(index)=>{
    dispatch({
      type : 'REMOVE_ITEM',
      payload : index
    })
  }


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
