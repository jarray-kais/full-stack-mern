import { useParams } from "react-router-dom"

const Hello = () => {
    const params =useParams()
    console.log(params)
  return (
    <div style={{backgroundColor : `${params.color2}` , color :`${params.color1}` }}> The word is : hello</div>
  )
}

export default Hello