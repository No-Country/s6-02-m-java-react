import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CoursesPage, HomePage, RootPage } from "../pages";


export const MainRoute = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/" element={<RootPage />}>
        <Route path="" element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
      </Route> 
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
