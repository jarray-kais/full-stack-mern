import "./App.css";
import Header from "./componenets/Header";
import MAincontent from "./componenets/MAincontent";
import Navigation from "./componenets/Navigation";

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <MAincontent />
    </div>
  );
}

export default App;
