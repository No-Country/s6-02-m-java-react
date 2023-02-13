import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CursosPage } from "../pages/CursosPage";
import { HomePage } from "../pages/HomePage";

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/curso" element={<CursosPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
