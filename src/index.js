import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavbarPrincipal from './Components/header/header';
import reportWebVitals from './reportWebVitals';
import SliderHome from './Components/sliderPrincipal';
import BannerPrincipal from './Components/bannerPrincipal';
import ContainerPrincipalHome from './Components/cuerpoHome';
import FooterGral from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BannerPrincipal />
    <NavbarPrincipal />
    <SliderHome />
    <ContainerPrincipalHome />
    <FooterGral />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
