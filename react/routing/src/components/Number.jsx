import { useParams } from "react-router-dom"

const Number = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <>
        { isNaN(id)=== false ? (<div>The number is : {id}</div>) : 
        (<div>The Word is : {id}</div>)
        }
    </>
  )
}

export default Number