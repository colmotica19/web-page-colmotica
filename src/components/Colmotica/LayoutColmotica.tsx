// LayoutColmotica.tsx
import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Colmotica/Header";
import { Outlet } from "react-router-dom";
import './../../Styles/mainColmotica.css'
import { FooterComponent } from "../global/Footer/Footer";
export default function LayoutColmotica() {
  useEffect(() => {
    document.body.dataset.page = "colmotica"
  })
  return (
    <Fragment>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Colmotica</title>
        <link rel="icon" type="image/png" href="/img/Favicon.png" />
        {/* <link rel="stylesheet" href="/src/Styles/mainColmotica.css" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <Outlet />
      <FooterComponent page="colmotica" />
    </Fragment>
  );
}
