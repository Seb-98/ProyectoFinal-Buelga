import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/styleNavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src="/images/op1.png" style={{ height: '50px', width: 'auto' }} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link as={Link} to="/categories/Local" className="nav-link-header">Local</Nav.Link>
                        <Nav.Link as={Link} to="/categories/Internacional" className="nav-link-header">Internacional</Nav.Link>
                        <Nav.Link as={Link} to="/categories/Selecciones" className="nav-link-header">Selecciones</Nav.Link>
                        <Nav.Link as={Link} to="/categories/Oferta" className="nav-link-header">Ofertas!</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <CartWidget />

            </Container>
        </Navbar>
    )
}

export default NavBar;