import { router } from "@/router";
import { RouterProvider } from "react-router";
import { useAuthInit } from "./features/auth/hooks/useAuthInit";

export const App = () => {
  useAuthInit();

  return <RouterProvider router={router} />;
};
