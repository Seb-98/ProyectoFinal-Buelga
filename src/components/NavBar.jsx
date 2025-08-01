import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/styleNavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Retro Futbol</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link className="nav-link-header" href="#home">Local</Nav.Link>
                        <Nav.Link className="nav-link-header" href="#link">Internacional</Nav.Link>
                        <Nav.Link className="nav-link-header" href="#link">Selecciones</Nav.Link>
                        <Nav.Link className="nav-link-header" href="#link">Ofertas!</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <CartWidget />

            </Container>
        </Navbar>
    )
}

export default NavBar;