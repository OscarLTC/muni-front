import { loginWithGoogle } from "@/api/auth";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

export const LoginPage = () => {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: loginWithGoogle,
    onSuccess: () => {
      navigate("/");
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 max-w-xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Sistema de Gestión de Reclamos
        </h1>
        <p className="text-gray-600 mt-1">Accede con tu cuenta institucional</p>
      </div>

      <Button
        onClick={() => loginMutation.mutate()}
        disabled={loginMutation.isPending}
        className="w-64 mt-10"
      >
        {loginMutation.isPending ? (
          "Cargando..."
        ) : (
          <div className="flex items-center justify-center">
            <FcGoogle className="mr-2" /> Iniciar sesión con Google
          </div>
        )}
      </Button>

      {loginMutation.isError && (
        <p className="text-red-500">
          {loginMutation.error?.message ?? "Error al iniciar sesión con Google"}
        </p>
      )}

      <p className="text-xs text-gray-500 mt-8 absolute bottom-4">
        © {new Date().getFullYear()} GDC | Todos los derechos reservados
      </p>
    </div>
  );
};
