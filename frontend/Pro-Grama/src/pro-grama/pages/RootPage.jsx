import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components";

const Root = () =>{
    return(
      <div className="">
        {/* <Sidebar /> */}
        
        <Header />
        <main className="px-12">
          <Outlet />
        </main>
      </div>
    )
}

export default Root;