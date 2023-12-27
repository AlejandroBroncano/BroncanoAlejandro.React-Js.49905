import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to='/'>Market<span style={{color: "darkblue", fontWeight: "bold"}}>House</span></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Quienes somos</Nav.Link>
                        <NavDropdown title="Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Restaurante</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Delivery
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Take Away</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Opiniones
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;