import proyectos from "./proyectos.json";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./proyectosHome.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProyectosHome() {
  let arrProyectos = proyectos;

  return (
    <div className="containerProyectos">
      <div className="containerTitle">
        <h4 id="tituloSeccion">Nuetros Proyectos de Investigación</h4>
      </div>
      <div className="textExplicativo">
        <p className="parrafoDetalle">
          En esta sección de la página uds. podrán encontrar todas las
          investigaciones realizadas por nuestro centro de estudios hasta la
          fecha. Las mismas se encuentran en formato .PDF para poder bajarlas de
          manera gratuita. Además podrá encontrar todos los datos relevantes del
          proyecto, como sus integrantes, o la fecha de publicación.
        </p>
      </div>
      <Row xs={1} md={3} className="rowContainerProyectos g-4">
        {arrProyectos.map((prop) => (
          <Col>
            <Card className="cardStyle">
              <Card.Body>
                <Card.Title>{prop.nombreProyecto}</Card.Title>
                <div className="cuerpoCard">
                  <Card.Subtitle className="mb-2 text-muted">
                    Integrantes: {prop.integrantes}
                  </Card.Subtitle>
                  <Card.Text>{prop.resumenProyecto}</Card.Text>
                  <footer className="footerCard blockquote-footer">
                    Fecha de publicación:{" "}
                    <cite title="Source Title"> {prop.fechaPublicacion} </cite>
                  </footer>
                </div>
                <div className="btnContainer">
                  <Button
                    className="btnDescarga"
                    href={prop.urlPdf}
                    variant="secondary"
                  >
                    Abrir PDF
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProyectosHome;
