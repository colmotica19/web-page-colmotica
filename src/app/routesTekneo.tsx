//routesTekneo.tsx

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
// import Login from "../components/login/Login";
// import Registrar from "../components/login/Registrar";
import { HomePage } from "../pages/Tekneo/home";
import Administracion from "../pages/Tekneo/administracion/administracion";
import ProtectedRoute from "../components/Tekneo/ProtectedRoute";
import VerificarUsuarioPass from "../components/Tekneo/login/VerificarUsuarioPass";
import CambiarPassword from "../components/Tekneo/login/CambiarPassword";
import Login from "../components/Tekneo/login/Login";

export const routerTekneo = createHashRouter([
  // {
  //   path: "/login",
  //   Component: Login
  // },
  // {
  //   path: "/registrar",
  //   Component: Registrar
  // },
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
        path: "login",
        Component: Login,
      },

      {
        index: true,
        Component: Login,
      },
      {
        path: "/home",
        Component: HomePage,
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
      /*{
        path: "documentacion",
        Component: Documentacion
      },*/
      {
        path: "documentacion",
        Component: ProtectedRoute,
        children: [{ index: true, Component: Documentacion }],
      },
      {
        path: "administracion",
        Component: Administracion,
      },
      {
        path: "verificar-codigo-pass",
        Component: VerificarUsuarioPass,
      },

      {
        path: "cambiarPassword",
        Component: CambiarPassword,
      },
    ],
  },
  {
    path: "/colmotica",
    Component: LayoutColmotica,
    children: routesColmotica,
  },
]);
