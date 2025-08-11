import { Outlet } from "react-router";
import { Helmet } from "react-helmet-async";
import { Header } from "./Header/Header";
import { FooterComponent } from "./Footer/Footer";
import './../../Styles/index.css'
import './../../Styles/tekneo.css'
import { useEffect } from "react";
export default function LayoutTekneo() {
  useEffect(() => {
      document.body.dataset.page = "tekneo"
    })
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tekneo</title>
        <link rel="icon" type="image/png" href="/img/Favicon.png" />
        {/* <link rel="stylesheet" href="/src/Styles/index.css" /> */}
        {/* <link rel="stylesheet" href="/src/Styles/tekneo.css" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet" />
      </Helmet>
      <Header />
      <Outlet></Outlet>
      <FooterComponent></FooterComponent>
    </>
  )
}
