import React from "react";
import { Search } from "./search";

const Header = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mb-4">
      <div className="flex items-center justify-between h-28 bg-gray-50 ">
        <h1 className="text-5xl text-blue-700 bg-gray-50 dark:bg-gray-300">
          Pro-Grama
        </h1>
        <Search />
      </div>
    </div>
  );
};

export default Header;
