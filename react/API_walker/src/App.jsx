import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Luke from './components/Luke';


function App() {


  return (
    <>
    <Home />
    <Routes>
    <Route path='/:param/:id' element={<Luke />} />

  </Routes>
    </>
    

    
  )
}

export default App
