import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../StoreContext'
const Header = () => {
  const {title} = useContext(StoreContext)
  
  return (
    <>
    <header id="nav-wrapper">
    <nav id="nav">
      <div className="nav left">
        <span className="gradient skew"><h1 className="logo un-skew">{title}</h1></span>
        <button id="menu" className="btn-nav"><span className="fas fa-bars"></span></button>
      </div>
      <div className="nav right">
        <Link to="/" className="nav-link active"><span className="nav-link-span"><span className="u-nav">Catalog</span></span></Link>
        <Link to="/create" className="nav-link"><span className="nav-link-span"><span className="u-nav">Add Book</span></span></Link>
      </div>
    </nav>
  </header>
    </>
  )
}

export default Header