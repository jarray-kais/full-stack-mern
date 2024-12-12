import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

const Luke = () => {
    const [data , setData] = useState([])
    const {param , id} = useParams(useParams)
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${param}/${id}`)
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
        .catch(error => console.error(error))

    },[param, id])
  return (
    <div className="container">
            {data ? (
        <div>
          <h2>Details:</h2>
          <ul>
            {/* Boucle pour afficher chaque clé et valeur */}
            {Object.entries(data).map(([key, value]) => (
              <li key={key}>
                <strong>{key}</strong>:{" "}
                {Array.isArray(value) ? (
                  <ul>
                    {value.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  value.toString()
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Luke