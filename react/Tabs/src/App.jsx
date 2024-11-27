
import "./App.css";
import TabsComponent from "./components/TabsComponent";

function App() {
const tab = [
  {
    label : "tab 1",
    content : "tab 1 content is showing here",
  },
  {
    label : "tab 2",
    content : "tab 2 content is showing here",
  },
  {
    label : "tab 3",
    content : "tab 3 content is showing here",
  },
]

  return (
    <>
    <h1>Tabs component</h1>
    <TabsComponent item = {tab}/>

    </>
  );
}

export default App;
