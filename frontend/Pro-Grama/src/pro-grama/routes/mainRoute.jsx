import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  CoursesPage,
  CursosPage,
  HomePage,
  RootPage,
  LessonsPage,
  ProfilePage,
  Faqs
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
        <Route path={`/CourseDetail/:id`} element={<CursosPage />} />
        <Route path="/CourseLessons" element={<LessonsPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/faqs" element={<Faqs/>} />
      </Route>
      <Route path="/Home" element={<LandingPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
