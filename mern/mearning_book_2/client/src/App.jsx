
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Header from './components/Header'
import DetailBook from './views/DetailBook'
import Createbook from './views/Createbook'


function App() {


  return (
    <>
    <Header />
    <main>
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/create"} element={<Createbook />} />
      <Route path={"/books/:id"} element={<DetailBook />} />
    </Routes>
    </main>
   
    </>
  )
}

export default App
