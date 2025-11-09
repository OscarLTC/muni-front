import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/api/firebase";
import { useAuthStore } from "@/store/auth";

export const useAuthInit = () => {
  const { setUser, setLoading } = useAuthStore();

  console.log("asd");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, setLoading]);
};
