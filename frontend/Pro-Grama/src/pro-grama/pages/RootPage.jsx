import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components";

const Root = () => {
  return (
    <div className="grid grid-cols-layout h-screen">
      <Sidebar />
      <div>
        <Header />
        <main className="px-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Root;
