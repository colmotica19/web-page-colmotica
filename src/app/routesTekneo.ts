import { createBrowserRouter } from "react-router";
import { Support } from "../pages/Tekneo/support";
import { Partners } from "../pages/Tekneo/partners";
import { routesColmotica } from "./routesColmotica";
import LayoutColmotica from "../components/Colmotica/LayoutColmotica";
import LayoutTekneo from "../components/Tekneo/LayoutTekneo";

export const routerTekneo = createBrowserRouter([
  {
    path: "/",
    Component: LayoutTekneo,
    children: [
      {
        path: "/support",
        Component: Support,
      },
      {
        path: "/partners",
        Component: Partners,
      },
    ]
  },
  {
    path: "/colmotica",
    Component: LayoutColmotica,
    children: routesColmotica
  },
]);
