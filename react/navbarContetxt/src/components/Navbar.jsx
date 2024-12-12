
import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
const Navbar = () => {
    const {name} = useContext(StoreContext)

  return (
    <>
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
        <h1>Hello, {name}</h1>
  
    </nav>
    </>
  )
}

export default Navbar