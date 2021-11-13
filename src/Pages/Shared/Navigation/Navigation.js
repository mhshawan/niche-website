import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Navigation.css'
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout, admin } = useAuth();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to={`/home`}>
                        <Navbar.Brand><img src={logo} alt="logo" className="logo" /></Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link to="/home" as={Link} className="fw-bolder">Home</Nav.Link>
                            {
                                user?.email &&
                                <NavDropdown className="fw-bolder" title="Dashboard" id="collasible-nav-dropdown">
                                    <NavDropdown.Item className="fw-bold" as={Link} to="/pay">Pay</NavDropdown.Item>
                                    <NavDropdown.Item className="fw-bold" as={Link} to="/myOrders">My Orders</NavDropdown.Item>
                                    <NavDropdown.Item className="fw-bold" as={Link} to="/reviews">Reviews</NavDropdown.Item>
                                </NavDropdown>

                            }
                            {
                                admin &&
                                <NavDropdown title="Admin-Dashboard" id="collasible-nav-dropdown" className="fw-bolder" >
                                    <NavDropdown.Item as={Link} to="/makeAdmin" className="fw-bold">Make Admin</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/manageAllOrders" className="fw-bold">Manage All Orders</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/manageProduct" className="fw-bold">Manage Products</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/addProduct" className="fw-bold">Add Product</NavDropdown.Item>
                                </NavDropdown>


                            }
                            {
                                user.email ?
                                    <Button variant="light" onClick={logout} className="fw-bolder">Logout</Button>

                                    :
                                    <Nav.Link eventKey={2} as={Link} to="/login" className="fw-bolder">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;