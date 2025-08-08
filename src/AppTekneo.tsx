import { RouterProvider } from "react-router";
import { routerTekneo } from "./app/routesTekneo";
import { HelmetProvider } from "react-helmet-async";

function AppTekneo() {
  return (
    <HelmetProvider>
      <RouterProvider router={routerTekneo} />
    </HelmetProvider>
  );
}

export default AppTekneo;
