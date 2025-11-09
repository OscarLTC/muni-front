import { LoginPage } from "@/features/auth/pages/LoginPage";
import { createBrowserRouter } from "react-router";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <div>Protected Home Page</div>
      </ProtectedRoute>
    ),
  },
]);
