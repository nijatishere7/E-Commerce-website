// React Router
import { Route, Routes, BrowserRouter } from "react-router";

// Routers
import { PublicRouter } from "./PublicRouter";
import { AdminRouter } from "./AdminRouter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/*" element={<PublicRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
