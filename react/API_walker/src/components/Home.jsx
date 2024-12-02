import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate()
  const category = ["people" , "planets" , "starships"]

  const [selectCategory , setSelectCategory] = useState('')
  const [id , setId] = useState(1)


 

  return (
    <div>
      <div className="container">
        <div className="dropdown-container">
        <p className="dropdown-title">Search for : </p>
        <select value={selectCategory} className="dropdown-select" onChange={(e)=>setSelectCategory(e.target.value)}>
        <option value="" hidden> select</option>
          
          {category.map((item, index)=>(
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <p className="dropdown-title">ID :</p>
        <input type="number" value={id}  className="dropdown-select" onChange={(e)=>setId(e.target.value)} min={1}/>
      </div>
      <button onClick={()=>navigate(`/${selectCategory}/${id}`)} >Search</button>
      </div>
      
    </div>
  )
}

export default Home