import "./App.css";
import Header from "./componenets/Header";
import Maincontent from "./componenets/Maincontent";
import Navigation from "./componenets/Navigation";

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Maincontent />
    </div>
  );
}

export default App;
