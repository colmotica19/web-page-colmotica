// AppTekneo.tsx

import { RouterProvider } from "react-router";
import { routerTekneo } from "./app/routesTekneo";
import { HelmetProvider } from "react-helmet-async";
import SingletonProvider from "./singleton/singletonProvider";
import { Toaster } from "react-hot-toast";

function AppTekneo() {
  return (
    <SingletonProvider>
      <HelmetProvider>
        <Toaster position="bottom-right" reverseOrder={false} />
        <RouterProvider router={routerTekneo} />
      </HelmetProvider>
    </SingletonProvider>
  );
}

export default AppTekneo;
