// React Router
import { Route, Routes } from "react-router";

export const AdminRouter = () => {
  return (
    <Routes>
      <Route index path="/" element={<h1>System</h1>} />
      <Route path="/users" element={<h1>Users</h1>} />
    </Routes>
  );
};
