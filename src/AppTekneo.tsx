import { RouterProvider } from "react-router";
import { routerTekneo } from "./app/routesTekneo";
import { HelmetProvider } from "react-helmet-async";
import SingletonProvider from "./singleton/singletonProvider";

function AppTekneo() {
  return (
    <SingletonProvider>
      <HelmetProvider>
        <RouterProvider router={routerTekneo} />
      </HelmetProvider>
    </SingletonProvider>
  );
}

export default AppTekneo;
