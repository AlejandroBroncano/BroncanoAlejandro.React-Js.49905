import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useGetCategories } from '../../hooks/useProducts';




const NavBar = () => {
    const { categories } = useGetCategories();


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to='/'>Market<span style={{ color: "darkblue", fontWeight: "bold" }}>House</span></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            {categories.map((category, index) => {
                                return (
                                    <NavDropdown.Item key={index}>
                                        <Link key={index} to={`/category/${category}`}>
                                            {category}
                                        </Link>
                                    </NavDropdown.Item>
                                );
                            })}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;