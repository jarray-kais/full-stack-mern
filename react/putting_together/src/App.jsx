import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
      <div className="App">
          <PersonCard firstName='Doe' lastName= 'Jane' age = {45} hairColor = 'black'/>
          <PersonCard firstName='Smith' lastName= 'John' age = {88} hairColor = 'brown'/>
    
      </div>
  );
}


export default App
