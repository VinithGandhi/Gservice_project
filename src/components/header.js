import React, { useState } from 'react';
import { Container, Navbar, NavDropdown, Nav, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCircleUser, faCartShopping, faBars, faLocationDot } from '@fortawesome/free-solid-svg-icons';


function HeaderComp(props) {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return (
        <>
            <Navbar expand="lg" className='fixed-top bg-dark-cust'>
                <Container>
                    <Col lg={4}>
                        <Nav className="me-auto">
                            <NavDropdown
                                className='text-white'
                                title={
                                    <span className='text-white' >
                                        <FontAwesomeIcon icon={faBars} /> &nbsp;Services
                                    </span>
                                }
                                id="collasible-nav-dropdown"
                                show={show}
                                onMouseEnter={showDropdown}
                                onMouseLeave={hideDropdown}
                            >
                                <NavDropdown.Item href="#action/3.1">Menu one</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Menu two</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Menu three</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Menu four</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Menu five</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Menu six</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Menu seven</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Menu eight</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Menu nine</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Menu ten</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='text-white' href="#link"> <FontAwesomeIcon icon={faLocationDot} /> &nbsp;Bengaluru</Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg={4} className="text-center">
                        <a href="index.html">
                            <img src="./assets/img/logo.png" width="160px" alt={'logo'} />
                        </a>
                    </Col>
                    <Col lg={4} >
                        <Nav className="ml-auto cust_flot_right">
                            <Nav.Link className='text-white' href="#home"> <FontAwesomeIcon icon={faEdit} /> &nbsp;Register</Nav.Link>
                            <Nav.Link className='text-white' href="#link"> <FontAwesomeIcon icon={faCircleUser} />  &nbsp;Login</Nav.Link>
                            <Nav.Link className='text-white' href="#link"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
                        </Nav>
                    </Col>
                </Container>
            </Navbar>
        </>
    );
}

export default HeaderComp;