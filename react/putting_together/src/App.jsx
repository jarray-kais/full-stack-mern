import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  const Card = [
    {
      firstName: 'Doe',
      lastName: 'Jane',
      age: 45,
      hairColor: 'black'
    },
    {
      firstName: 'Smith',
      lastName: 'John',
      age: 88,
      hairColor: 'brown'
    },
   
  ]
  return (
      <div className="App">
        {
          Card.map((person, index) => (
            <PersonCard key={index} {...person} />
          ))
        }
        
    
      </div>
  );
}


export default App
