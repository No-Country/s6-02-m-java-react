import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CursosPage } from "../pages/CursosPage";
import { HomePage } from "../pages/HomePage";
import LessonsPage from "../pages/LessonsPage";

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/curso" element={<CursosPage />} />
      <Route path="/lessons" element={<LessonsPage/>}/>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
