import { useAuthStore } from "@/store/auth";
import type { ReactNode } from "react";
import { Navigate } from "react-router";
import { LuLoaderCircle } from "react-icons/lu";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <LuLoaderCircle className="animate-spin text-4xl text-gray-600 mx-auto" />
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
};
