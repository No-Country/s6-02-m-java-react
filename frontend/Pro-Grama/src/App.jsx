import "./App.css";
import { Sidebar } from "./components";
import ProgressCards from "./ProgressCards/ProgressCards";

function App() {
  return (
    <>
      <div className="App container">
        <Sidebar />
        Hola!
    <ProgressCards/>
      </div>
    </>
  );
}

export default App;
