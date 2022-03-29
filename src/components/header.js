import React, { useState, useEffect } from 'react';
import { Container, Navbar, NavDropdown, Nav, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCircleUser, faCartShopping, faBars, faLocationDot, faGear, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


function HeaderComp(props) {
    const [show, setShow] = useState(false);
    const [showlogg, setShowlogg] = useState(false);
    const [loggingstatus, setloggingstatus] = useState(false);
    const [loggedusername, setloggedusername] = useState('');

    useEffect(() => {
        if (localStorage.getItem('logging_status') !== null && localStorage.getItem('logging_status') !== undefined) {
            setloggingstatus(localStorage.getItem('logging_status'));
            setloggedusername(localStorage.getItem('username'));
        } else {
            setloggingstatus(false);
        }
    }, []);

    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    const showDropdownlogg = (e) => {
        setShowlogg(!showlogg);
    }
    const hideDropdownlogg = e => {
        setShowlogg(false);
    }

    function handlelogout(){
        localStorage.clear();
        window.location.reload();
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
                                <NavDropdown.Item href="/service">Menu one</NavDropdown.Item>
                                <NavDropdown.Item href="/service">Menu two</NavDropdown.Item>
                                <NavDropdown.Item href="/service">Menu three</NavDropdown.Item>
                                <NavDropdown.Item href="/service">Menu four</NavDropdown.Item>
                                <NavDropdown.Item href="/service">Menu five</NavDropdown.Item>
                                <NavDropdown.Item href="/service">Menu six</NavDropdown.Item>
                                <NavDropdown.Item href="/service">Menu seven</NavDropdown.Item>
                                <NavDropdown.Item href="/service">Menu eight</NavDropdown.Item>
                                <NavDropdown.Item href="/service">Menu nine</NavDropdown.Item>
                                <NavDropdown.Item href="/service">Menu ten</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='text-white' href="#link"> <FontAwesomeIcon icon={faLocationDot} /> &nbsp;Bengaluru</Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg={4} className="text-center">
                        <a href="/">
                            <img src="./assets/img/logo.png" width="160px" alt={'logo'} />
                        </a>
                    </Col>
                    <Col lg={4} >

                        {loggingstatus === false ?
                            <>
                                <Nav className="ml-auto cust_flot_right">
                                    <Nav.Link className='text-white' href="/register"> <FontAwesomeIcon icon={faEdit} /> &nbsp;Register</Nav.Link>
                                    <Nav.Link className='text-white' href="/login"> <FontAwesomeIcon icon={faCircleUser} />  &nbsp;Login</Nav.Link>
                                    <Nav.Link className='text-white' href="#link"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
                                </Nav>
                            </> :
                            <Nav className="ml-auto cust_flot_right">
                                <NavDropdown
                                    className='text-white'
                                    title={
                                        <span className='text-white' >
                                            <FontAwesomeIcon icon={faCircleUser} /> &nbsp; {loggedusername}
                                        </span>
                                    }
                                    id="collasible-nav-dropdown"
                                    show={showlogg}
                                    onMouseEnter={showDropdownlogg}
                                    onMouseLeave={hideDropdownlogg}
                                >
                                    <NavDropdown.Item href="#"> <FontAwesomeIcon icon={faGear} /> &nbsp; Setting</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handlelogout}> <FontAwesomeIcon icon={faSignOutAlt} /> &nbsp; Logout</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className='text-white' href="#link"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
                            </Nav>
                        }





                    </Col>
                </Container>
            </Navbar>
        </>
    );
}

export default HeaderComp;