import { useMutation } from "@tanstack/react-query";
import { loginWithGoogle, logout } from "@/features/auth/api/auth";
import { useNavigate } from "react-router";
import { useAuthStore } from "@/store/auth";

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginWithGoogle,
    onSuccess: () => {
      navigate("/");
    },
  });
};

export const useLogoutMutation = () => {
  const navigate = useNavigate();

  const { setUser, setLoading } = useAuthStore();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setUser(null);
      setLoading(false);
      navigate("/login");
    },
  });
};
