import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavbarPrincipal from "./Components/Home/header/header";
import BannerPrincipal from "./Components/Home/bannerPrincipal";
import FooterGral from "./Components/Home/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SliderHome from "./Components/Home/sliderPrincipal";
import ContainerPrincipalHome from "./Components/Home/cuerpoHome";
import ProyectosHome from "./Components/proyectosInvestigación/totalProyectos"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <BannerPrincipal />
      <NavbarPrincipal />
        <Switch>
          <Route exact path="/">
            <SliderHome />
            <ContainerPrincipalHome />
          </Route>
          <Route path="/contacto">
            
          </Route>
          <Route path="/nuestros-proyectos">
            <ProyectosHome />
          </Route>
        </Switch>
      <FooterGral />
    </Router>
  </React.StrictMode>
);
