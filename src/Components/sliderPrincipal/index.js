import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./slider.css";

function SliderHome() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="containerSlider">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            id="imgCarrousel"
            className="d-block w-100"
            src="https://live.staticflickr.com/653/21705234718_16425d8a01_b.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Primera Imagen de Prueba</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="imgCarrousel"
            className="d-block w-100"
            src="https://live.staticflickr.com/653/21705234718_16425d8a01_b.jpg"
            alt="Palacio San Jose"
          />

          <Carousel.Caption>
            <h3>Segunda Imagen de Prueba</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="imgCarrousel"
            className="d-block w-100"
            src="https://live.staticflickr.com/653/21705234718_16425d8a01_b.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Tercer Imagen de Prueba</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderHome;
