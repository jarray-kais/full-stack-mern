import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Number from './components/Number';
import Hello from './components/Hello';


function App() {


  return (
  
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/:id' element={<Number />} />
      <Route path='/:p/:color1/:color2' element={<Hello />} />

    </Routes>

    
  )
}

export default App
