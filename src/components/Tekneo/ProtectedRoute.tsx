import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { GlobalContext } from "../../singleton/globalContext";

export default function ProtectedRoute() {
  const { userLogin, setUserLogin } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function verifySession() {
      try {
        const res = await fetch(
          import.meta.env.VITE_API_URL + "colmotica/auth/me",
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await res.json();

        if (data?.success && data.user) {
          setUserLogin({
            EMAIL: data.user.EMAIL,
            PASS_HASH: data.user.PASS_HASH,
          });
        }
      } catch (err) {
        console.warn("No hay sesión activa");
      } finally {
        setLoading(false);
      }
    }

    // Solo verifica si no hay login en memoria
    if (!userLogin?.EMAIL) verifySession();
    else setLoading(false);
  }, []);

  if (loading) return <p>Cargando sesión...</p>;

  if (!userLogin?.EMAIL) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}
