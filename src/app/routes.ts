import { createBrowserRouter } from "react-router";
import { HomePage } from "../pages/home";
import { Producs } from "../pages/products";
import { Support } from "../pages/support";
import { Partners } from "../pages/partners";

export const routerPage = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/products",
    Component: Producs,
  },
  {
    path: "/support",
    Component: Support,
  },
  {
    path: "/partners",
    Component: Partners,
  },
]);
