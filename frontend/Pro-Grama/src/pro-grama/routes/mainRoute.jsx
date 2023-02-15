import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CoursesPage, CursosPage, HomePage, RootPage } from "../pages";
import LessonsPage from "../pages/LessonsPage";

export const MainRoute = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/" element={<RootPage />}>
        <Route path="" element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="/CourseDetail" element={<CursosPage />} />
        <Route path="/lessons" element={<LessonsPage />} />
      </Route>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
