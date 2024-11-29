
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2//pokemon?limit=150")
     .then((response) => {
        setPokemonData(response.data.results);
      })

  },[])


  return (
    <div className="main">
    <h1>Pokemon API</h1>
    <ol>
      {
        pokemonData?.map((pokemeon , index)=>(
          <li key={index}>{pokemeon.name}</li>
        ))
      }
      
    </ol>


    </div>
  );
}

export default App;
