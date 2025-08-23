// import Products from "../pages/Colmotica/products";
import Academy from "../pages/Colmotica/academy";
import Soluciones from "../pages/Colmotica/soluciones";
import Consultorias from "../pages/Colmotica/consultorias";
import Home from "../pages/Colmotica/home";
import Edificios from "../pages/Colmotica/edificios";
import Residencial from "../pages/Colmotica/residencial";
import Hoteles from "../pages/Colmotica/hoteles";
import PoliticaDePrivacidad from "../pages/Tekneo/politicaDePrivacidad";
import PreguntasFrecuentes from "../pages/Tekneo/preguntasFrecuentes";
import TerminosYCondiciones from "../pages/Tekneo/terminosYCondiciones";

export const routesColmotica = [
  {
    index: true,
    Component: Home
  },
  // {
  //   path: "products",
  //   Component: Products
  // },
  {
    path: 'academy',
    Component: Academy
  },
  {
    path: 'soluciones',
    Component: Soluciones
  },
  {
    path: 'consultorias',
    Component: Consultorias
  },
  {
    path: 'edificios',
    Component: Edificios
  },
  {
    path: 'residencial',
    Component: Residencial
  },
  {
    path: 'hoteles',
    Component: Hoteles
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
]