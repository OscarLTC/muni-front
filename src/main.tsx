import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthStore } from "./store/auth.ts";
import { listenAuth } from "./api/auth.ts";
import { App } from "./App.tsx";

const qc = new QueryClient();

listenAuth((user) => useAuthStore.getState().setUser(user));

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={qc}>
    <App />
  </QueryClientProvider>
);
