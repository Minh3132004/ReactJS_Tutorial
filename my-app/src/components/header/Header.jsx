import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaRocket } from 'react-icons/fa';

function Header() {

    const navigate = useNavigate();
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container fluid className="px-4">
                <Navbar.Brand href="/" className="brand-logo">
                    <FaRocket className="logo-icon" style={{ fontSize: '28px', color: '#6366f1', marginRight: '8px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/users" className='nav-link'>Users</NavLink>
                        <NavLink to="/admin" className='nav-link'>Admin</NavLink>
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                            <NavDropdown.Item>Preferences</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="d-flex align-items-center gap-2">
                        <Nav.Link onClick={() => navigate("/login")} className="login-link">Log in</Nav.Link>
                        <Button variant="dark" className="signup-btn">Sign up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;