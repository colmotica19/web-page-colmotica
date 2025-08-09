import { createBrowserRouter } from "react-router";
import { Partners } from "../pages/Tekneo/partners";
import { routesColmotica } from "./routesColmotica";
import LayoutColmotica from "../components/Colmotica/LayoutColmotica";
import LayoutTekneo from "../components/Tekneo/LayoutTekneo";
import { HomePage } from "../pages/Tekneo/home";

export const routerTekneo = createBrowserRouter([
  {
    path: "/",
    Component: LayoutTekneo,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      // {
      //   path: "/support",
      //   Component: Support,
      // },
      {
        path: "socios",
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
