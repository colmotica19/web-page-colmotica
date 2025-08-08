import { createBrowserRouter } from "react-router";
import Home from "../pages/Colmotica/home";

export const routerColmotica = createBrowserRouter([
  {
    path: "/",
    Component: Home
  }
])