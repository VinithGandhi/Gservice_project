import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faUser, faMobile, faSearch, faEnvelope, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import HeaderComp from '../components/header';
import FooterComp from '../components/footer';


function HomePage(props) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true
    };
    var banner_settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,

    };

    return (
        <>
            <HeaderComp />
            <main role="main">
                <section id='main_banner'>
                    <Container fluid className='bg-semi-dark' style={{ paddingBottom: 80 }} >
                        <Container>
                            <div className='intro-section'>
                                <Row>
                                    <Col>
                                        <div className='pdb-20'>
                                            <h1 className='intro-section-header'>HOW CAN WE HELP YOU TODAY?</h1>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='pdb-10'>
                                        <div className='banner_menu'>
                                            <Slider {...settings}>
                                                <div className='banner_menu_cnt'>
                                                    <img src="./assets/img/menu_img.png" alt="menu" />
                                                    <p>Menu one</p>
                                                </div>
                                                <div className='banner_menu_cnt'>
                                                    <img src="./assets/img/menu_img.png" alt="menu" />
                                                    <p>Menu two</p>
                                                </div>
                                                <div className='banner_menu_cnt'>
                                                    <img src="./assets/img/menu_img.png" alt="menu" />
                                                    <p>Menu Three</p>
                                                </div>
                                                <div className='banner_menu_cnt'>
                                                    <img src="./assets/img/menu_img.png" alt="menu" />
                                                    <p>Menu four</p>
                                                </div>
                                                <div className='banner_menu_cnt'>
                                                    <img src="./assets/img/menu_img.png" alt="menu" />
                                                    <p>Menu five</p>
                                                </div>
                                                <div className='banner_menu_cnt'>
                                                    <img src="./assets/img/menu_img.png" alt="menu" />
                                                    <p>Menu six</p>
                                                </div>
                                                <div className='banner_menu_cnt'>
                                                    <img src="./assets/img/menu_img.png" alt="menu" />
                                                    <p>Menu seven</p>
                                                </div>
                                                <div className='banner_menu_cnt'>
                                                    <img src="./assets/img/menu_img.png" alt="menu" />
                                                    <p>Menu eight</p>
                                                </div>
                                                <div className='banner_menu_cnt'>
                                                    <img src="./assets/img/menu_img.png" alt="menu" />
                                                    <p>Menu nine</p>
                                                </div>
                                                <div className='banner_menu_cnt'>
                                                    <img src="./assets/img/menu_img.png" alt="menu" />
                                                    <p>Menu ten</p>
                                                </div>
                                                <div className='banner_menu_cnt'>
                                                    <img src="./assets/img/menu_img.png" alt="menu" />
                                                    <p>Menu eleven</p>
                                                </div>
                                                <div className='banner_menu_cnt'>
                                                    <img src="./assets/img/menu_img.png" alt="menu" />
                                                    <p>Menu twelve</p>
                                                </div>
                                            </Slider>
                                        </div>
                                    </Col>
                                </Row>
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
                                    <Slider {...banner_settings}>
                                        <div className='padding_20'>
                                            <h3>
                                                <span style={{ color: '#111111', fontWeight: 700 }}>G</span>
                                                <span style={{ color: '#6c757d', fontWeight: 800 }}>Serves</span>
                                            </h3>
                                            <h5 style={{ color: '#111111', fontWeight: 800 }}>SIMPLE | CONVENIENT | TRANSPARENT</h5>
                                            <p><b>GServes</b> is an easy-to-use new age platform for availing the services provided by Government
                                                department like Licenses, Certificates, Approvals, Registrations, etc., With <b>GServes</b>, enjoy
                                                the convenience of doorsteps collection and delivery of documents, at absolutely trnasparent prices.
                                            </p>
                                        </div>
                                        <div className='padding_20'>
                                            <h3>
                                                <span style={{ color: '#111111', fontWeight: 700 }}>G</span>
                                                <span style={{ color: '#6c757d', fontWeight: 800 }}>Serves</span>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                            <div className="four">
                                                <span className="counter">2147</span>
                                                <p>Happy Customers</p>
                                            </div>
                                        </div>
                                        <div className='padding_20'>
                                            <h3>
                                                <span style={{ color: '#111111', fontWeight: 700 }}>G</span>
                                                <span style={{ color: '#6c757d', fontWeight: 800 }}>Serves</span>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                            <div className="four">
                                                <span className="counter">3275</span>
                                                <p>Registered Members</p>
                                            </div>
                                        </div>
                                        <div className='padding_20'>
                                            <h3>
                                                <span style={{ color: '#111111', fontWeight: 700 }}>G</span>
                                                <span style={{ color: '#6c757d', fontWeight: 800 }}>Serves</span>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                            <div className="four">
                                                <span className="counter">5849</span>
                                                <p>Services Delivered</p>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Container>
                </section>

                <section id='static_banner'>
                    <Container>
                        <Row>
                            <Col className='text-center'>
                                <h3 style={{ color: '#6c757d', fontWeight: 800 }}>How GServes Works</h3>
                            </Col>
                        </Row>
                        <div style={{ padding: 30 }}>
                            <Row>
                                <Col lg={1}>
                                    <div className='text-center' style={{ display: 'block', width: '100px' }}>
                                        <img src="./assets/img/icons/1.png" alt='service' />
                                        <h6 className='gs_wk_cnt'>Choose the service</h6>
                                    </div>
                                </Col>
                                <Col lg={1} className='gs_wk_img text-center' style={{ marginTop: '30px' }}>
                                    <div style={{ display: 'block', width: '100px' }}>
                                        <img src="./assets/img/icons/2.png" style={{ width: '60px' }} alt='service' />
                                    </div>
                                </Col>
                                <Col lg={1}>
                                    <div className='text-center' style={{ display: 'block', width: '100px' }}>
                                        <img src="./assets/img/icons/3.png" alt='service' />
                                        <h6 className='gs_wk_cnt'>Choose the service</h6>
                                    </div>
                                </Col>
                                <Col lg={1} className='gs_wk_img text-center' style={{ marginTop: '30px' }}>
                                    <div style={{ display: 'block', width: '100px' }}>
                                        <img src="./assets/img/icons/2.png" style={{ width: '60px' }} alt='service' />
                                    </div>
                                </Col>
                                <Col lg={1}>
                                    <div className='text-center' style={{ display: 'block', width: '100px' }}>
                                        <img src="./assets/img/icons/4.png" alt='service' />
                                        <h6 className='gs_wk_cnt'>Print the completed Application in specified format</h6>
                                    </div>
                                </Col>
                                <Col lg={1} className='gs_wk_img text-center' style={{ marginTop: '30px' }}>
                                    <div style={{ display: 'block', width: '100px' }}>
                                        <img src="./assets/img/icons/2.png" style={{ width: '60px' }} alt='service' />
                                    </div>
                                </Col>
                                <Col lg={1}>
                                    <div className='text-center' style={{ display: 'block', width: '100px' }}>
                                        <img src="./assets/img/icons/5.png" alt='service' />
                                        <h6 className='gs_wk_cnt'>Hand over document to GServes</h6>
                                    </div>
                                </Col>
                                <Col lg={1} className='gs_wk_img text-center' style={{ marginTop: '30px' }}>
                                    <div style={{ display: 'block', width: '100px' }}>
                                        <img src="./assets/img/icons/2.png" style={{ width: '60px' }} alt='service' />
                                    </div>
                                </Col>
                                <Col lg={1}>
                                    <div className='text-center' style={{ display: 'block', width: '100px' }}>
                                        <img src="./assets/img/icons/6.png" alt='service' />
                                        <h6 className='gs_wk_cnt'>Documents verified & Submitted by GServes</h6>
                                    </div>
                                </Col>
                                <Col lg={1} className='gs_wk_img text-center' style={{ marginTop: '30px' }}>
                                    <div style={{ display: 'block', width: '100px' }}>
                                        <img src="./assets/img/icons/2.png" style={{ width: '60px' }} alt='service' />
                                    </div>
                                </Col>
                                <Col lg={1}>
                                    <div className='text-center' style={{ display: 'block', width: '100px' }}>
                                        <img src="./assets/img/icons/7.png" alt='service' />
                                        <h6 className='gs_wk_cnt'>Application processed and service delivered</h6>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </Container>
                </section>

                <section id='testiminials' style={{ backgroundColor: '#eff8f7' }}>
                    <Container>
                        <Row style={{ paddingTop: 50, paddingBottom: 5 }}>
                            <Col className='text-center'>
                                <h3 style={{ color: '#6c757d', fontWeight: 800 }}>TESTIMONIALS</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3}></Col>
                            <Col lg={6} className='text-center'>
                                <Slider {...banner_settings}>
                                    <div className='testiminials_cnt'>
                                        <h1>
                                            <FontAwesomeIcon style={{ color: '#6c757d' }} icon={faCircleUser} />
                                        </h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                        </p>
                                        <br />
                                        <footer style={{ fontSize: '14px' }} class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </div>
                                    <div className='testiminials_cnt'>
                                        <h1>
                                            <FontAwesomeIcon style={{ color: '#6c757d' }} icon={faCircleUser} />
                                        </h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                        </p>
                                        <br />
                                        <footer style={{ fontSize: '14px' }} class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </div>
                                </Slider>
                            </Col>
                            <Col lg={3}></Col>
                        </Row>
                    </Container>
                </section>

                <section id='getintouch' style={{ backgroundColor: '#f2ffff', paddingTop: 50, paddingBottom: 50 }}>
                    <Container>
                        <Row>
                            <Col className='text-center'>
                                <h3 style={{ color: '#6c757d', fontWeight: 800 }}>GET IN TOUCH</h3>
                            </Col>
                        </Row>

                        <div className='form_cnt' style={{ paddingTop: 20 }}>
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
                                        <Button className='sub_btn btn-block' variant="secondary" type="submit">
                                            <FontAwesomeIcon icon={faPaperPlane} /> Send
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Container>
                </section>

                <FooterComp />
            </main>
        </>
    );
}

export default HomePage;

