import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/authRoutes"
import { MainRoute } from "../pro-grama/routes/mainRoute"


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainRoute/>} />
      <Route path="/auth/*" element={<AuthRoutes />} />
    </Routes>
  )
}
