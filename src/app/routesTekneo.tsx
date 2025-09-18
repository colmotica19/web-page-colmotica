import { createHashRouter } from "react-router";
import { Partners } from "../pages/Tekneo/partners";
import { routesColmotica } from "./routesColmotica";
import LayoutColmotica from "../components/Colmotica/LayoutColmotica";
import LayoutTekneo from "../components/Tekneo/LayoutTekneo";
import ControlDeAcceso from "../pages/Tekneo/TGate/TGate";
import PreguntasFrecuentes from "../pages/Tekneo/preguntasFrecuentes";
import PoliticaDePrivacidad from "../pages/Tekneo/politicaDePrivacidad";
import TerminosYCondiciones from "../pages/Tekneo/terminosYCondiciones";
import Tshow from "../pages/Tekneo/TShow/TShow";
import Ldm from "../pages/Tekneo/LDM/LDM";
import Nodemaker from "../pages/Tekneo/Nodemaker/Nodemaker";
import Documentacion from "../pages/Tekneo/documentacion/documentacion";
import Login from "../components/login/Login";
import Registrar from "../components/login/Registrar";
import { Navigate } from "react-router";
import { HomePage } from "../pages/Tekneo/home";
import Administracion from "../pages/Tekneo/administracion/administracion";

export const routerTekneo = createHashRouter([
  {
    path: "/login",
    Component: Login
  },
  {
    path: "/registrar",
    Component: Registrar
  },
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
        path: "/home",
        Component: HomePage
      },
      {
        path: "socios",
        Component: Partners,
      },
      {
        path: "controlDeAcceso",
        Component: ControlDeAcceso,
      },
      {
        path: "tshow",
        Component: Tshow,
      },
      {
        path: "nodemaker",
        Component: Nodemaker,
      },
      {
        path: "ldm",
        Component: Ldm,
      },
      {
        path: "preguntasFrecuentes",
        Component: PreguntasFrecuentes,
      },
      {
        path: "politicaDePrivacidad",
        Component: PoliticaDePrivacidad,
      },
      {
        path: "terminosYCondiciones",
        Component: TerminosYCondiciones,
      },
      {
        path: "documentacion",
        Component: Documentacion
      },
      {
        path: "administracion",
        Component: Administracion
      }
    ],
  },
  {
    path: "/colmotica",
    Component: LayoutColmotica,
    children: routesColmotica,
  }
]);
