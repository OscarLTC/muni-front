import { LoginPage } from "@/features/auth/pages/LoginPage";
import { createBrowserRouter, Navigate } from "react-router";
import { ProtectedRoute } from "./ProtectedRoute";
import { MainLayout } from "@/components/layout/MainLayout";

export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/reclamos" replace /> },
      { path: "reclamos", element: <div>Claims Page</div> },
      { path: "areas", element: <div>Areas Page</div> },
      { path: "usuarios", element: <div>Users Page</div> },
    ],
  },
  // fallback
  { path: "*", element: <Navigate to="/" replace /> },
]);
