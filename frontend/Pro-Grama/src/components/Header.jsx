import React from "react";

const Header = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mb-4">
      <div className="flex items-center justify-start h-24 rounded bg-gray-50 dark:bg-gray-800">
        <h1 className="text-5xl text-blue-700 bg-gray-50 dark:bg-gray-800">
          Pro-Grama
        </h1>
        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
      </div>
      <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
      </div>
    </div>
  );
};

export default Header;
