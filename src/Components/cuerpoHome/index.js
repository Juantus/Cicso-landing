import "./homeStyles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function ContainerPrincipalHome() {
  return (
    <div className="containerBodyHome">
      <div className="stylesSeparador">
        <hr size="2px" color="#050505" />
      </div>
      <div>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="https://www.mastekhw.com/wp-content/uploads/2022/07/Corsair-iCUE-se-integrara-con-Nvidia-Broadcast-540x170.png" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default ContainerPrincipalHome;
