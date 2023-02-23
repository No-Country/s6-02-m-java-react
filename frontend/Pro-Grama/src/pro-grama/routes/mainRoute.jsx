import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  CoursesPage,
  CursosPage,
  HomePage,
  RootPage,
  LessonsPage,
} from "../pages";
import LandingPage from "../pages/LandingPage";

export const MainRoute = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/" element={<RootPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Courses" element={<CoursesPage />} />
        <Route path="/CourseDetail" element={<CursosPage />} />
        <Route path="/CourseLessons" element={<LessonsPage />} />
      </Route>
      <Route path="/Home" element={<LandingPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
