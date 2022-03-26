import React, { useState } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSquareCheck, faCalendarCheck, faList, faCartPlus, faAnglesRight, faUserCircle, faUser, faLock, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import HeaderComp from '../components/header';
import FooterComp from '../components/footer';
import BannerMenuComp from '../components/bannermenu';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


function ServicesPage(props) {

    const [showComments, setshowComments] = useState(false);

    function showDropdown(value, value2) {
        var a = document.getElementsByClassName(value);
        a[0].classList.remove('b_block');
        a[0].classList.add('b_none');
        var b = document.getElementsByClassName(value2);
        b[0].classList.remove('b_none');
        b[0].classList.add('b_block');
    }


    function hideDropdown(value, value2) {
        var a = document.getElementsByClassName(value2);
        a[0].classList.remove('b_block');
        a[0].classList.add('b_none');
        var b = document.getElementsByClassName(value);
        b[0].classList.remove('b_none');
        b[0].classList.add('b_block');
    }


    const handelshowDropdown = (e) => {
        setshowComments(!showComments);
    }


    const [loginmodalopen, setloginmodalopen] = useState(false);

    const openloginmodal = () => setloginmodalopen(true);
    const closeloginmodal = () => setloginmodalopen(false);

    const [proceduremodalopen, setproceduremodalopen] = useState(false);

    const openproceduremodal = () => setproceduremodalopen(true);
    const closeproceduremodal = () => setproceduremodalopen(false);

    return (
        <>
            <HeaderComp />
            <main role="main">
                <section id='main_banner'>
                    <Container fluid className='bg-semi-dark' style={{ paddingBottom: 40 }} >
                        <Container>
                            <div className='intro-section'>
                                <Row>
                                    <Col>
                                        <div className='search_suggestions'>
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                    placeholder="Type the service you are looking for"
                                                    aria-label="Type the service you are looking for"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <Button variant="secondary" id="button-addon2" style={{ width: '100px' }}>
                                                    <FontAwesomeIcon icon={faSearch} /> &nbsp;
                                                </Button>
                                            </InputGroup>

                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='pdb-10'>
                                        <BannerMenuComp />
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </Container>
                </section>

                <section id='dynamic_banner'>
                    <Container>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <div className="con-bottom-inner">
                                    <div className='padding_20'>
                                        <h4>
                                            <span style={{ color: '#6c757d', fontWeight: 800 }}>TRANSFER OF VEHICLE - WITHIN KARNATAKA </span>
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor dui gravida, ultrices massa id, sagittis felis. Donec posuere nulla sed risus vestibulum malesuada. In vestibulum diam ut dui tempus, vel congue dui fermentum. </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <div className="container">
                        <div style={{ padding: '0px 80px' }}>
                            <div className="row">
                                <div className="col-lg-3 col-xs-12" style={{ paddingBottom: 20 }}
                                    onMouseEnter={() => showDropdown('card-info-on', 'card-info-off')}
                                    onMouseLeave={() => hideDropdown('card-info-on', 'card-info-off')}
                                >
                                    <div className="card-info-on b_block">
                                        <div className="card" style={{ width: "auto", height: "200px", padding: "10px", boxShadow: "0px 0px 7px 1px #00000047", cursor: "pointer" }}>
                                            <div className="card-body text-center">
                                                <div style={{ paddingBottom: 20 }}>
                                                    <span style={{ color: '#6c757d', fontSize: '50px' }}>
                                                        <FontAwesomeIcon icon={faSquareCheck} />
                                                    </span>
                                                </div>
                                                <span className="card-text" style={{ fontSize: "15px", fontWeight: 700, color: "#000" }}>OUT PUT</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-info-off b_none" >
                                        <div className="card" style={{ width: "auto", height: "200px", boxShadow: "0px 0px 7px 1px #00000047", cursor: "pointer" }}>
                                            <div className="card-body text-center" style={{ backgroundColor: "#6c757d", color: "#fff" }}>
                                                <p>
                                                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                                        euismod orci a
                                                        ullamcorper pharetra.</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-xs-12" style={{ paddingBottom: 20 }}
                                    onMouseEnter={() => showDropdown('card-pay-on', 'card-pay-off')}
                                    onMouseLeave={() => hideDropdown('card-pay-on', 'card-pay-off')}
                                >
                                    <div className="card-pay-on b_block">
                                        <div className="card"
                                            style={{ width: "auto", height: "200px", padding: "10px", boxShadow: "0px 0px 7px 1px #00000047", cursor: "pointer" }}>
                                            <div className="card-body text-center">
                                                <div style={{ paddingBottom: 20 }}>
                                                    <span
                                                        style={{ color: '#6c757d', fontSize: '50px' }}>&#8377;</span>
                                                </div>
                                                <span className="card-text"
                                                    style={{ fontSize: "15px", fontWeight: 700, color: "#000" }}>CHARGES</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-pay-off b_none">
                                        <div className="card"
                                            style={{ width: "auto", height: "200px", boxShadow: "0px 0px 7px 1px #00000047", cursor: "pointer" }}>
                                            <div className="card-body text-center" style={{ backgroundColor: "#6c757d", color: "#fff", padding: "15%" }}>
                                                <span style={{ fontWeight: 600, fontSize: '30px' }} >&#8377; 0</span>
                                                <p><small>The actual costs can be calculated only upon choosing the add on
                                                    services</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-xs-12" style={{ paddingBottom: 20 }}
                                    onMouseEnter={() => showDropdown('card-time-on', 'card-time-off')}
                                    onMouseLeave={() => hideDropdown('card-time-on', 'card-time-off')}
                                >
                                    <div className="card-time-on b_block">
                                        <div className="card"
                                            style={{ width: "auto", height: "200px", padding: "10px", boxShadow: "0px 0px 7px 1px #00000047", cursor: "pointer" }}>
                                            <div className="card-body text-center">
                                                <div style={{ paddingBottom: 20 }}>
                                                    <span style={{ color: '#6c757d', fontSize: '50px' }}>
                                                        <FontAwesomeIcon icon={faCalendarCheck} />
                                                    </span>
                                                </div>
                                                <span className="card-text"
                                                    style={{ fontSize: "15px", fontWeight: 700, color: "#000" }}>TIME TAKEN</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-time-off b_none">
                                        <div className="card"
                                            style={{ width: "auto", height: "200px", boxShadow: "0px 0px 7px 1px #00000047", cursor: "pointer" }}>
                                            <div className="card-body text-center"
                                                style={{ backgroundColor: "#6c757d", color: "#fff", padding: "15%" }}>
                                                <span style={{ fontWeight: 600, fontSize: '30px' }}>15 Days</span>
                                                <p><small>Sed non dignissim magna. Integer ultricies est sit amet dolor
                                                    ultrices</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-xs-12" style={{ paddingBottom: 20 }}
                                    onMouseEnter={() => showDropdown('card-addon-on', 'card-addon-off')}
                                    onMouseLeave={() => hideDropdown('card-addon-on', 'card-addon-off')}
                                >
                                    <div className="card-addon-on b_block">
                                        <div className="card"
                                            style={{ width: "auto", height: "200px", padding: "10px", boxShadow: "0px 0px 7px 1px #00000047", cursor: "pointer" }}>
                                            <div className="card-body text-center">
                                                <div style={{ paddingBottom: 20 }}>
                                                    <span style={{ color: '#6c757d', fontSize: '50px' }}>
                                                        <FontAwesomeIcon icon={faList} />
                                                    </span>
                                                </div>
                                                <span className="card-text"
                                                    style={{ fontSize: "15px", fontWeight: 700, color: "#000" }}>ADD ON</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-addon-off b_none">
                                        <div className="card"
                                            style={{ width: "auto", height: "200px", boxShadow: "0px 0px 7px 1px #00000047" }}>
                                            <button type="button" className="close" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            <div className="card-body text-center"
                                                style={{ backgroundColor: "#6c757d", color: "#fff", padding: "15px" }}>
                                                <ul style={{ paddingInlineStart: '2px', textAlign: 'left', listStyleType: 'none' }}>
                                                    <li><input type="checkbox" className="input-assumpte" /> Addon One</li>
                                                    <li><input type="checkbox" /> Addon Two</li>
                                                    <li><input type="checkbox" /> Addon Three</li>
                                                    <li><input type="checkbox" /> Addon Four</li>
                                                    <li><input type="checkbox" /> Addon Five</li>
                                                    <li><input type="checkbox" /> Addon Six</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container" style={{ paddingTop: "50px", paddingBottom: "10px" }}>
                        <div className="row">
                            <div className="col-lg-4 col-xs-12">
                                <button className="btn btn-danger btn-block w-100" data-toggle="modal" data-target="#exampleModal"
                                    style={{ color: "#fff", backgroundColor: "#ab5d40" }} onClick={openloginmodal}>
                                    Add to cart<span style={{ padding: "5%" }}><FontAwesomeIcon icon={faCartPlus} /></span>
                                </button>
                            </div>

                            <div className="col-lg-4 col-xs-12">
                                <button className="btn btn-secondary btn-block w-100" style={{ color: "#fff" }} data-toggle="modal"
                                    data-target="#ProcedureModal" onClick={openproceduremodal}>
                                    View Procedures<span style={{ padding: "5%" }}><FontAwesomeIcon icon={faAnglesRight} /></span>
                                </button>
                            </div>

                            <div className="col-lg-4 col-xs-12">
                                <button className="btn btn-secondary btn-block comments w-100" style={{ color: "#fff" }} onClick={handelshowDropdown} >
                                    View Comments<span style={{ padding: "5%" }}><FontAwesomeIcon icon={faAnglesRight} /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                        <div className="row">
                            <div className="col-lg-12 text-center">

                                <p><strong><a href="#link">Click here</a> to access the Official website to the department</strong>
                                </p>

                            </div>

                        </div>
                    </div>
                </section>

                {showComments === true ?
                    <section>
                        <div className="container showcomments" style={{ paddingTop: "20px", paddingBottom: "50px" }}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card"
                                        style={{ width: "auto", height: "auto", padding: "10px", boxShadow: "0px 0px 7px 1px #00000047", cursor: "pointer" }}>
                                        <div className="card-body">
                                            <div style={{ borderBottom: "1px #ccc solid" }}>
                                                <div className="row" style={{ paddingBottom: "5px" }}>
                                                    <div className="col-sm-9">
                                                        Comments
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="float-right">
                                                            <button className="btn btn-secondary btn-sm">Enter new comment</button>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                            <div style={{ padding: "20px" }}>
                                                <div className="row">
                                                    <div className="col-sm-1">
                                                        <FontAwesomeIcon icon={faUserCircle} />
                                                    </div>
                                                    <div className="col-sm-11">
                                                        <div style={{ borderBottom: " 1px #ccc solid" }}>
                                                            <b>Rachel Samsundar</b>
                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-1">

                                                    </div>
                                                    <div className="col-sm-9">
                                                        Sed placerat blandit iaculis. Duis aliquet aliquet arcu, vitae volutpat orci. Morbi nec lacinia odio. Aenean vehicula dictum mauris, nec rutrum urna mattis gravida
                                                    </div>
                                                    <div className="col-sm-2" style={{ paddingTop: "2px" }}>
                                                        <div className="btn-group">
                                                            <button className="btn btn-info btn-sm">Reply</button>
                                                            <button className="btn btn-secondary btn-sm">Report</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ padding: "20px" }}>
                                                    <div className="row">
                                                        <div className="col-sm-1">
                                                            <FontAwesomeIcon icon={faUserCircle} />
                                                        </div>
                                                        <div className="col-sm-11">
                                                            <div style={{ borderBottom: " 1px #ccc solid" }}>
                                                                Replied by - <b>Kevin Velappan</b>
                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-1">

                                                        </div>
                                                        <div className="col-sm-11">
                                                            Sed placerat blandit iaculis. Duis aliquet aliquet arcu, vitae volutpat orci. Morbi nec lacinia odio. Aenean vehicula dictum mauris, nec rutrum urna mattis gravida
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </section>
                    : <></>
                }


                <Modal open={loginmodalopen} onClose={closeloginmodal} center>
                    <div className='modal_cnt'>
                        <section>
                            <div className="container">
                                <div className="row">
                                    <div className="col-2"></div>
                                    <div className="col-8">
                                        <div className="con-bottom-inner">
                                            <h3><span style={{ color: '#6c757d', fontWeight: 800 }}>Login</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </section>
                        <section>
                            <div className="container">
                                <div style={{ padding: 2 }}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1" style={{ padding: '.75rem' }}><FontAwesomeIcon icon={faUser} /></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1" style={{ padding: '.75rem' }}><FontAwesomeIcon icon={faLock} /></span>
                                                </div>
                                                <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-6">
                                                    <button type="button" className="btn btn-secondary btn-block w-100" >
                                                        Cancel
                                                    </button>
                                                </div>
                                                <div className="col-6">
                                                    <a href="homeSignIn.html" type="button" className="btn btn-secondary btn-block w-100" >
                                                        <span style={{ padding: 10 }}> <FontAwesomeIcon icon={faChevronRight} /> </span> Login
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row" style={{ paddingTop: 10 }}>
                                                <div className="col-6 social">
                                                    <a href="#password">Forget Password</a>
                                                </div>
                                                <div className="col-6 social">
                                                    <a href="#register">Register</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                        <section>
                            <div className="container" style={{ paddingTop: 20, paddingBottom: 20 }}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="text-center">
                                            <h5><span style={{ color: '#6c757d', fontWeight: 600 }}>Login with</span></h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" style={{ paddingTop: 10 }}>
                                    <div className="col-12">
                                        <button type="button" className="btn btn-primary btn-labeled btn-block w-100" >
                                            <span className="btn-label-social"><i className="fab fa-facebook-f"></i></span> Sign in with Facebook
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div style={{ paddingTop: 15 }}>
                                            <button type="button" className="btn btn-danger btn-labeled btn-block w-100" >
                                                <span className="btn-label-social"><i className="fab fa-google-plus-g"></i></span> Sign in with Google+
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                </Modal>

                <Modal open={proceduremodalopen} onClose={closeproceduremodal} center
                    classNames={{
                        modal: 'proceduremodal',
                    }}>
                    <div className='modal_cnt'>
                        <section>
                            <div className="container" style={{ paddingTop: 20 }}>
                                <div className="text-center">
                                    <h4><span style={{ color: "#6c757d" }}>Procedures for Transfer of Vehicle - Within Karnataka</span></h4>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="container">
                                <div style={{ paddingTop: 2 }}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div id="table-scroll">
                                                <table width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                    1
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                    2
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                    3
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                    4
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                    5
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                    6
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                    7
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                    8
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                    9
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                    10
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                    11
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                    12
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                    13
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                    14
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                    15
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                    16
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>


                </Modal>



                <FooterComp />
            </main>
        </>
    );
}

export default ServicesPage;

