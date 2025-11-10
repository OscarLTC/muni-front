import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthStore } from "./store/auth.ts";
import { listenAuth } from "./features/auth/api/auth.ts";
import { App } from "./App.tsx";

const qc = new QueryClient();

const unsubscribe = listenAuth((user) => {
  const { setUser, setLoading } = useAuthStore.getState();
  setUser(user);
  setLoading(false);
});

window.addEventListener("beforeunload", () => {
  unsubscribe();
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={qc}>
    <App />
  </QueryClientProvider>
);
