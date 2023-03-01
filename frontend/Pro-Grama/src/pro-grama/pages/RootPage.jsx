import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components";

const Root = () => {
  return (
    <div className="grid grid-cols-layout min-h-screen w-screen">
      <Sidebar />
      <div className="bg-Blue">
        <Header />
        <main className="bg-Blue px-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Root;
