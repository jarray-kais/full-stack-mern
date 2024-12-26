import { useParams } from "react-router-dom"

const Hello = () => {
    const p = useParams()
   console.log(p)
  return (
    <>
    <h2 style={{backgroundColor : `${p.color2}` , color :`${p.color1}` }}> The word is : hello</h2>
    </>
    
  )
}

export default Hello