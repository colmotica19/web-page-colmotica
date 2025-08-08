import { createBrowserRouter } from "react-router";
import { HomePage } from "../pages/Tekneo/home";
import { Producs } from "../pages/Tekneo/products";
import { Support } from "../pages/Tekneo/support";
import { Partners } from "../pages/Tekneo/partners";

export const routerTekneo = createBrowserRouter([
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
