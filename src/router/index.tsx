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
      { index: true, element: <Navigate to="/complaints" replace /> },
      {
        path: "complaints",
        element: <div>Complaints Page</div>,
        handle: { breadcrumb: "Reclamos" },
      },
      {
        path: "departments",
        element: <div>Departments Page</div>,
        handle: { breadcrumb: "Áreas" },
      },
      {
        path: "users",
        element: <div>Users Page</div>,
        handle: { breadcrumb: "Usuarios" },
      },
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);
