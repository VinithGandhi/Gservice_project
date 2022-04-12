import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Container, Navbar, NavDropdown, Nav, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCircleUser, faCartShopping, faBars, faLocationDot, faGear, faSignOutAlt, faAngleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { axiosInstance } from '../Services';
import { Base64 } from 'js-base64';
import { slide as Menu } from 'react-burger-menu'


function HeaderComp(props) {
    const [menudetails, setMenudetails] = useState([]);
    const [showlogg, setShowlogg] = useState(false);
    const [loggingstatus, setloggingstatus] = useState(false);
    const [loggedusername, setloggedusername] = useState('');

    useLayoutEffect(() => {
        axiosInstance.get('/Menudetails')
            .then((res) => {
                setMenudetails(res.data.data);
            }).catch((error) => {
                console.log('error');
            });
    }, []);

    useEffect(() => {
        if (localStorage.getItem('logging_status') !== null && localStorage.getItem('logging_status') !== undefined) {
            setloggingstatus(localStorage.getItem('logging_status'));
            setloggedusername(Base64.decode(localStorage.getItem('gsun')));
        } else {
            setloggingstatus(false);
        }
    }, []);

    const showDropdownlogg = (e) => {
        setShowlogg(!showlogg);
    }
    const hideDropdownlogg = e => {
        setShowlogg(false);
    }

    function handlelogout() {
        localStorage.clear();
        window.location.reload();
    }

    const [burgermenustate, setburgermenustate] = useState(false);
    const [showsubmenu, setshowsubmenu] = useState(false);
    const [submenutitle, setsubmenutitle] = useState(false);
    const [submenudetails, setsubmenudetails] = useState([]);

    function handleOnOpen() {
        setburgermenustate(true);
        setshowsubmenu(false);
        setsubmenutitle('');
        setsubmenudetails([]);
    }

    function handleOnClose() {
        setburgermenustate(false);
        setshowsubmenu(false);
        setsubmenutitle('');
        setsubmenudetails([]);
    }

    function handlesidemenu(title, values) {
        setshowsubmenu(true);
        setsubmenutitle(title);
        setsubmenudetails(values);
    }
    function clearsubmenu() {
        setshowsubmenu(false);
        setsubmenutitle('');
        setsubmenudetails([]);
    }

    return (
        <>

            <Menu isOpen={burgermenustate} onClose={handleOnClose} customBurgerIcon={
                <p className='text-white' >
                    <FontAwesomeIcon icon={faBars} /> Services
                </p>}>

                {showsubmenu === true ?
                    <h4 className='text-center' style={{ paddingBottom: "15px", fontSize: "1.2rem" }}>
                        <FontAwesomeIcon onClick={clearsubmenu} style={{ fontSize: "16px", cursor: "pointer" }} icon={faArrowLeft} />
                        &nbsp; {submenutitle}</h4>
                    :
                    <h4 className='text-center' style={{ paddingBottom: "15px" }}>All Services</h4>
                }


                {showsubmenu === true ?
                    submenudetails.map((value, index) => {
                        return (
                            <a key={index} className="menu-item-sizebar" href={'/serves/' + value.url}>
                                {value.menu_name}
                            </a>
                        );
                    })

                    :
                    menudetails.map((value, index) => {
                        return (
                            <div style={{ cursor: "pointer" }} key={index} className="menu-item-sizebar" onClick={() => handlesidemenu(value.menu_name, value.submenu)}>
                                {value.menu_name}
                                <span style={{ float: "right", fontSize: "12px" }}> <FontAwesomeIcon icon={faAngleRight} />  </span>
                            </div>
                        );
                    })

                }

            </Menu>

            <Navbar expand="lg" className='fixed-top bg-dark-cust'>
                <Container>
                    <Col lg={4}>
                        <Nav className="me-auto">

                            <Nav.Link className='text-white' onClick={handleOnOpen}> <FontAwesomeIcon icon={faBars} /> &nbsp;Services</Nav.Link>
                            <Nav.Link className='text-white' href="#link"> <FontAwesomeIcon icon={faLocationDot} /> &nbsp;Bengaluru</Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg={4} className="text-center">
                        <a href="/">
                            <img src="../assets/img/logo.png" width="160px" alt={'logo'} />
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