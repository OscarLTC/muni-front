import { create } from "zustand";
import type { User } from "firebase/auth";

type AuthState = {
  user: User | null;
  loading: boolean;
  setUser: (u: User | null) => void;
  setLoading: (loading: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setUser: (u) => set({ user: u }),
  setLoading: (loading) => set({ loading }),
}));
