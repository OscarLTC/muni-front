import { router } from "@/router";
import { RouterProvider } from "react-router";
import { useAuthInit } from "./features/auth/hooks/useAuthInit";
import { ThemeProvider } from "./components/theme-provider";

export const App = () => {
  useAuthInit();

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
