import "./App.css";
import { Sidebar, CardContainer} from "./components";
import ProgressCards from "./ProgressCards/ProgressCards";
import { Search } from "./components";

function App() {
  return (
    <>
      <div className="App container">
        <Sidebar />
        <div className="flex gap-8 w-full items-center">
          <span>Logo</span>
          <Search />
        </div>
        <ProgressCards />
        <CardContainer/>
      </div>
    </>
  );
}

export default App;
