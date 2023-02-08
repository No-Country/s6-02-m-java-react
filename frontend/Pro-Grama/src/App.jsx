import "./App.css";
import { Search } from "./components";

function App() {
  return <div className="App">
    <div className="flex gap-8 w-full items-center">
      <span>Logo</span>
      <Search />
    </div> 
  </div>;
}

export default App;
