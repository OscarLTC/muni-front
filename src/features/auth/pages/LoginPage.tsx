import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useLoginMutation } from "../hooks/useAuthMutation";
import { ModeToggle } from "@/components/mode-toggle";

export const LoginPage = () => {
  const loginMutation = useLoginMutation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 max-w-xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Sistema de Gestión de Incidencias
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Accede con tu cuenta institucional
        </p>
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

      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      {loginMutation.isError && (
        <p className="text-red-500">
          {loginMutation.error?.message ?? "Error al iniciar sesión con Google"}
        </p>
      )}

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-8 absolute bottom-4">
        © {new Date().getFullYear()} SGI | Todos los derechos reservados
      </p>
    </div>
  );
};
