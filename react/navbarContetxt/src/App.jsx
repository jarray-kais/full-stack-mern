import './App.css'
import { createContext } from 'react'
import Navbar from './components/Navbar'
import Formwrapper from './components/Formwrapper'
import { StoreProvider } from './context/StoreContext'
function App() {
  const store = createContext()
  return (
    <StoreProvider value={store}>
      <Navbar />
      <Formwrapper />
    </StoreProvider>
  )
}

export default App
