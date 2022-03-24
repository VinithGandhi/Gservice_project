import React from 'react';
import '../style/custom.css';
import { Container, Row, Col, Form, Button, InputGroup, FormControl, Modal } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCircleUser, faUser, faCartShopping, faBars, faMobile, faLocationDot, faSearch, faEnvelope, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';


function HomePage(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true
    };
    var banner_settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <>
            <section id='home_section'>
                <div className='mainheader'>
                    <Container className='pd-10'>
                        <Row>
                            <Col lg={3} className='margin_a'>
                                <div className='header_left_m'>
                                    <div className='cnt service_cnt'>
                                        <h6><FontAwesomeIcon icon={faBars} /> &nbsp;Services</h6>

                                        <div className='services_cnt'>
                                            <p>Menu one</p>
                                            <p>Menu two</p>
                                            <p>Menu three</p>
                                            <p>Menu four</p>
                                            <p>Menu five</p>
                                            <p>Menu six</p>
                                            <p>Menu seven</p>
                                            <p>Menu Eight</p>
                                            <p>Menu nine</p>
                                            <p>Menu ten</p>

                                        </div>


                                    </div>
                                    <div className='cnt'>
                                        <h6><FontAwesomeIcon icon={faLocationDot} /> &nbsp;Bengaluru</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className='logo_img'>
                                    <img alt='logo' src='./assets/img/logo.png' />
                                </div>
                            </Col>
                            <Col lg={3} className='margin_a'>
                                <div className='header_left_m'>
                                    <div className='cnt'>
                                        <h6><FontAwesomeIcon icon={faEdit} /> &nbsp;Register</h6>
                                    </div>
                                    <div className='cnt'>
                                        <h6><FontAwesomeIcon icon={faCircleUser} /> &nbsp;Login</h6>
                                    </div>
                                    <div className='cnt'>
                                        <h6><FontAwesomeIcon icon={faCartShopping} /></h6>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='banner_cnt'>
                    <h3>HOW CAN WE HELP YOU TODAY?</h3>
                    <div className='banner_menu'>
                        <Slider {...settings}>
                            <div className='banner_menu_cnt'>
                                <img src="./assets/img/menu_img.png" alt="menu" />
                                <h3>Menu one</h3>
                            </div>
                            <div className='banner_menu_cnt'>
                                <img src="./assets/img/menu_img.png" alt="menu" />
                                <h3>Menu two</h3>
                            </div>
                            <div className='banner_menu_cnt'>
                                <img src="./assets/img/menu_img.png" alt="menu" />
                                <h3>Menu Three</h3>
                            </div>
                            <div className='banner_menu_cnt'>
                                <img src="./assets/img/menu_img.png" alt="menu" />
                                <h3>Menu four</h3>
                            </div>
                            <div className='banner_menu_cnt'>
                                <img src="./assets/img/menu_img.png" alt="menu" />
                                <h3>Menu five</h3>
                            </div>
                            <div className='banner_menu_cnt'>
                                <img src="./assets/img/menu_img.png" alt="menu" />
                                <h3>Menu six</h3>
                            </div>
                        </Slider>
                    </div>
                    <div className='search_suggestions'>
                        <Form>
                            <Row>
                                <Col lg={9} className={'search_input'}>
                                    <Form.Control type="text" placeholder="Type the service you are looking for" />
                                </Col>
                                <Col lg={3} className={'search_btn'}>
                                    <Button variant="primary" type="submit">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </section>

            <section id='second_banner'>
                <div className='dynamicbanner'>
                    <Slider {...banner_settings}>
                        <div className='dynamicbanner_cnt'>
                            <h4>
                                <span className='header'>Why G</span>
                                <span className='subheader'>Serves</span>
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <h4>
                                <span className='subheader'>3275</span>
                            </h4>
                            <p>
                                Registered Members
                            </p>
                        </div>

                        <div className='dynamicbanner_cnt'>
                            <h4>
                                <span className='header'>Why G</span>
                                <span className='subheader'>Serves</span>
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <h4>
                                <span className='subheader'>3275</span>
                            </h4>
                            <p>
                                Registered Members
                            </p>
                        </div>
                        <div className='dynamicbanner_cnt'>
                            <h4>
                                <span className='header'>Why G</span>
                                <span className='subheader'>Serves</span>
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <h4>
                                <span className='subheader'>3275</span>
                            </h4>
                            <p>
                                Registered Members
                            </p>
                        </div>
                        <div className='dynamicbanner_cnt'>
                            <h4>
                                <span className='header'>Why G</span>
                                <span className='subheader'>Serves</span>
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <h4>
                                <span className='subheader'>3275</span>
                            </h4>
                            <p>
                                Registered Members
                            </p>
                        </div>
                    </Slider>

                </div>
            </section>

            <section id='static_banner' className='pd-20'>
                <Container>
                    <div className='static_banner_cnt'>
                        <h3 className='static_banner_header'>How GServes Works</h3>
                        <div className='static_banner_cnt'>
                            <Row>
                                <Col>
                                    <div>
                                        <img src="./assets/img/icons/1.png" />
                                        <p className='gs_wk_cnt'>Choose the service</p>
                                    </div>
                                </Col>
                                <Col className='gs_wk_img'>
                                    <div>
                                        <img src="./assets/img/icons/2.png" />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <img src="./assets/img/icons/3.png" />
                                        <p className='gs_wk_cnt'>Choose the service</p>
                                    </div>
                                </Col>
                                <Col className='gs_wk_img'>
                                    <div>
                                        <img src="./assets/img/icons/2.png" />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <img src="./assets/img/icons/4.png" />
                                        <p className='gs_wk_cnt'>Print the completed Application in specified format</p>
                                    </div>
                                </Col>
                                <Col className='gs_wk_img'>
                                    <div>
                                        <img src="./assets/img/icons/2.png" />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <img src="./assets/img/icons/5.png" />
                                        <p className='gs_wk_cnt'>Hand over document to GServes</p>
                                    </div>
                                </Col>
                                <Col className='gs_wk_img'>
                                    <div>
                                        <img src="./assets/img/icons/2.png" />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <img src="./assets/img/icons/6.png" />
                                        <p className='gs_wk_cnt'>Documents verified & Submitted by GServes</p>
                                    </div>
                                </Col>
                                <Col className='gs_wk_img'>
                                    <div>
                                        <img src="./assets/img/icons/2.png" />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <img src="./assets/img/icons/7.png" />
                                        <p className='gs_wk_cnt'>Application processed and service delivered</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>

            <section id='testimonials'>
                <div className='testimonials_cnt'>
                    <h3 className='testimonials_cnt_header'>TESTIMONIALS</h3>
                    <div className='testimonials_cnt_bdy' >
                        <Slider {...banner_settings}>
                            <div className='dynamicbanner_cnt'>
                                <h1>
                                    <FontAwesomeIcon icon={faCircleUser} />
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                </p>
                                <p>
                                    Someone famous in Source Title
                                </p>
                            </div>
                            <div className='dynamicbanner_cnt'>
                                <h1>
                                    <FontAwesomeIcon icon={faCircleUser} />
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                </p>
                                <p>
                                    Someone famous in Source Title
                                </p>
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className='contact_us_cnt pd-10'>
                    <h3 className='testimonials_cnt_header'>GET IN TOUCH</h3>

                    <div className='form_cnt'>
                        <Form>
                            <Row>
                                <Col lg={4} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">
                                            <FontAwesomeIcon icon={faUser} />
                                        </InputGroup.Text>
                                        <FormControl
                                            placeholder="Name"
                                            aria-label="Name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Col>
                                <Col lg={4} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">
                                            <FontAwesomeIcon icon={faMobile} />
                                        </InputGroup.Text>
                                        <FormControl
                                            placeholder="Mobile"
                                            aria-label="Mobile"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Col>
                                <Col lg={4} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </InputGroup.Text>
                                        <FormControl
                                            placeholder="Email"
                                            aria-label="Email"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={8} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">
                                            <FontAwesomeIcon icon={faComment} />
                                        </InputGroup.Text>
                                        <FormControl
                                            placeholder="Message"
                                            aria-label="Message"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Col>
                                <Col lg={4} >
                                    <Button className='sub_btn' variant="secondary" type="submit">
                                        <FontAwesomeIcon icon={faPaperPlane} /> Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </section>

            <section id="footer">
                <div className='footer_cnt'>
                    <Row>
                        <Col lg={7}>
                            <div className='footer_left_cnt'>
                                <img src='./assets/img/logo.png' alt='logo' />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='footer_right_cnt'>
                                <p>Contact us / Legal Info / Copy Righ / All other usual stuff</p>
                                <p>© Copyright 2022, All Right Reserved</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <div className='modal_cnt'>
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modal heading
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>


        </>
    );
}

export default HomePage;

