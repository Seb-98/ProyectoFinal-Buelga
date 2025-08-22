import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/styleNavBar.css';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img src="/images/op1.png" style={{ height: '50px', width: 'auto' }} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link className="nav-link-header" href={`/categories/Local`}>Local</Nav.Link>
                        <Nav.Link className="nav-link-header" href={`/categories/Internacional`}>Internacional</Nav.Link>
                        <Nav.Link className="nav-link-header" href={`/categories/Selecciones`}>Selecciones</Nav.Link>
                        <Nav.Link className="nav-link-header" href={`/categories/Oferta`}>Ofertas!</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <CartWidget />

            </Container>
        </Navbar>
    )
}

export default NavBar;