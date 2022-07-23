import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.css";

function NavbarPrincipal() {
  return (
    <Navbar id="stylesNavbar" expand="lg">
      <Container fluid>
       {/*  <Navbar.Brand href="#">CICSo</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/contacto">Quienes Somos</Nav.Link>
            <NavDropdown title="Proyectos de Investigación" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Poyecto 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Proyecto 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Todos los proyectos
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button id='btnBusqueda' variant="outline-Secundary"></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPrincipal;
