import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faUser, faMobile, faSearch, faEnvelope, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import HeaderComp from '../components/header';
import FooterComp from '../components/footer';
import BannerMenuComp from '../components/bannermenu';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Base64 } from 'js-base64';
import { axiosInstance } from '../Services';
import SearchComp from '../components/search';


function HomePage(props) {

    const [loggingstatus, setloggingstatus] = useState(false);
    const [edittestimonials, setedittestimonials] = useState(false);
    const [loggedusername, setloggedusername] = useState('');
    const [testimonials, settestimonials] = useState([]);
    useEffect(() => {
        if (localStorage.getItem('logging_status') !== null && localStorage.getItem('logging_status') !== undefined) {
            setloggingstatus(localStorage.getItem('logging_status'));
            setloggedusername(Base64.decode(localStorage.getItem('gsun')));
        } else {
            setloggingstatus(false);
        }
        gettestimonials();
    }, []);

    function gettestimonials() {
        axiosInstance.get('/Testimonials')
            .then((res) => {
                settestimonials(res.data.data);
                let datsss = res.data.data;
                if (localStorage.getItem('logging_status') !== null && localStorage.getItem('logging_status') !== undefined) {
                    let mydata_v = datsss.find(el => el.user_id === Base64.decode(localStorage.getItem('gsud')));
                    if (mydata_v !== undefined) {
                        setedittestimonials(true);
                        setFomdatas({
                            ...form_datas,
                            testimonial_msg: mydata_v["message"],
                            username: mydata_v["user_name"],
                            userid: mydata_v["user_id"],
                        });
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const [modalopen, setmodalopen] = useState(false);
    const openmodal = () => {
        setmodalopen(true);
        setFomdatas({
            ...form_datas,
            username: loggedusername,
            userid: Base64.decode(localStorage.getItem('gsud'))
        });
    }
    const closemodal = () => {
        setmodalopen(false)
        setFomdatas({
            username: '',
            userid: '',
            testimonial_msg: '',
        });
    };

    const [form_datas, setFomdatas] = useState({
        username: '',
        userid: '',
        testimonial_msg: '',
    });

    const [error_msgs, seterror_msgs] = useState({
        show_success_msg: false,
        success_msg: '',
        show_error_msg: false,
        error_msg: '',
    });

    const [form_errormsg, setformerrormsg] = useState({
        username_errormsg: "",
        testimonial_msg_errormsg: "",
    });

    function handleInputChange(event) {
        if (event.target.name === "testimonial_msg") {
            setFomdatas({
                ...form_datas,
                testimonial_msg: event.target.value
            });
        }
    }


    function formvalidation() {

        let username_errormsg = '';
        let testimonial_msg_errormsg = '';

        if (!form_datas.username) {
            username_errormsg = "User name cannot be blank";
        }

        if (!form_datas.testimonial_msg) {
            testimonial_msg_errormsg = "Message cannot be blank";
        }

        if (username_errormsg || testimonial_msg_errormsg) {
            setformerrormsg({
                username_errormsg: username_errormsg,
                testimonial_msg_errormsg: testimonial_msg_errormsg,
            });
            return false;
        }
        else {
            return true;
        }
    }

    function handletestimonialsubmit() {
        const validated = formvalidation();
        if (validated) {
            setformerrormsg({
                username_errormsg: "",
                password_errormsg: "",
            });
            const JSONvalue = form_datas;
            axiosInstance.post('/Testimonials/insert', JSONvalue)
                .then((res) => {
                    if (res.data.status === 'success') {
                        seterror_msgs({
                            show_success_msg: true,
                            success_msg: res.data.msg,
                            show_error_msg: false,
                            error_msg: ''
                        });
                        setFomdatas({
                            username: '',
                            userid: '',
                            testimonial_msg: '',
                        });
                        setTimeout(() => {
                            closemodal();
                            cleardatas();
                            gettestimonials();
                        }, 3000);
                    }
                    else {
                        seterror_msgs({
                            ...error_msgs,
                            show_error_msg: true,
                            error_msg: 'Something went wrong please try again'
                        });
                        setTimeout(() => {
                            cleardatas();
                        }, 3000);
                    }
                })
                .catch((err) => {
                    seterror_msgs({
                        ...error_msgs,
                        show_error_msg: true,
                        error_msg: 'Something went wrong please try again'
                    });
                    setTimeout(() => {
                        cleardatas();
                    }, 3000);
                });
        }
    }

    function handletestimonialedit() {
        const validated = formvalidation();
        if (validated) {
            setformerrormsg({
                username_errormsg: "",
                password_errormsg: "",
            });
            const JSONvalue = form_datas;
            axiosInstance.post('/Testimonials/edit', JSONvalue)
                .then((res) => {
                    if (res.data.status === 'success') {
                        seterror_msgs({
                            show_success_msg: true,
                            success_msg: res.data.msg,
                            show_error_msg: false,
                            error_msg: ''
                        });
                        setFomdatas({
                            username: '',
                            userid: '',
                            testimonial_msg: '',
                        });
                        setTimeout(() => {
                            closemodal();
                            cleardatas();
                            gettestimonials();
                        }, 3000);
                    }
                    else {
                        seterror_msgs({
                            ...error_msgs,
                            show_error_msg: true,
                            error_msg: 'Something went wrong please try again'
                        });
                        setTimeout(() => {
                            cleardatas();
                        }, 3000);
                    }
                })
                .catch((err) => {
                    seterror_msgs({
                        ...error_msgs,
                        show_error_msg: true,
                        error_msg: 'Something went wrong please try again'
                    });
                    setTimeout(() => {
                        cleardatas();
                    }, 3000);
                });
        }
    }

    function cleardatas() {
        seterror_msgs({
            show_success_msg: false,
            success_msg: '',
            show_error_msg: false,
            error_msg: '',
        });
    }

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
                                        <BannerMenuComp />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <SearchComp />
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
                                        <img src="../assets/img/icons/1.png" alt='service' />
                                        <h6 className='gs_wk_cnt'>Choose the service</h6>
                                    </div>
                                </Col>
                                <Col lg={1} className='gs_wk_img text-center' style={{ marginTop: '30px' }}>
                                    <div style={{ display: 'block', width: '100px' }}>
                                        <img src="../assets/img/icons/2.png" style={{ width: '60px' }} alt='service' />
                                    </div>
                                </Col>
                                <Col lg={1}>
                                    <div className='text-center' style={{ display: 'block', width: '100px' }}>
                                        <img src="../assets/img/icons/3.png" alt='service' />
                                        <h6 className='gs_wk_cnt'>Choose the service</h6>
                                    </div>
                                </Col>
                                <Col lg={1} className='gs_wk_img text-center' style={{ marginTop: '30px' }}>
                                    <div style={{ display: 'block', width: '100px' }}>
                                        <img src="../assets/img/icons/2.png" style={{ width: '60px' }} alt='service' />
                                    </div>
                                </Col>
                                <Col lg={1}>
                                    <div className='text-center' style={{ display: 'block', width: '100px' }}>
                                        <img src="../assets/img/icons/4.png" alt='service' />
                                        <h6 className='gs_wk_cnt'>Print the completed Application in specified format</h6>
                                    </div>
                                </Col>
                                <Col lg={1} className='gs_wk_img text-center' style={{ marginTop: '30px' }}>
                                    <div style={{ display: 'block', width: '100px' }}>
                                        <img src="../assets/img/icons/2.png" style={{ width: '60px' }} alt='service' />
                                    </div>
                                </Col>
                                <Col lg={1}>
                                    <div className='text-center' style={{ display: 'block', width: '100px' }}>
                                        <img src="../assets/img/icons/5.png" alt='service' />
                                        <h6 className='gs_wk_cnt'>Hand over document to GServes</h6>
                                    </div>
                                </Col>
                                <Col lg={1} className='gs_wk_img text-center' style={{ marginTop: '30px' }}>
                                    <div style={{ display: 'block', width: '100px' }}>
                                        <img src="../assets/img/icons/2.png" style={{ width: '60px' }} alt='service' />
                                    </div>
                                </Col>
                                <Col lg={1}>
                                    <div className='text-center' style={{ display: 'block', width: '100px' }}>
                                        <img src="../assets/img/icons/6.png" alt='service' />
                                        <h6 className='gs_wk_cnt'>Documents verified & Submitted by GServes</h6>
                                    </div>
                                </Col>
                                <Col lg={1} className='gs_wk_img text-center' style={{ marginTop: '30px' }}>
                                    <div style={{ display: 'block', width: '100px' }}>
                                        <img src="../assets/img/icons/2.png" style={{ width: '60px' }} alt='service' />
                                    </div>
                                </Col>
                                <Col lg={1}>
                                    <div className='text-center' style={{ display: 'block', width: '100px' }}>
                                        <img src="../assets/img/icons/7.png" alt='service' />
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

                                    {testimonials.map((value, index) => {
                                        return (
                                            <div key={index} className='testiminials_cnt'>
                                                <h1>
                                                    <FontAwesomeIcon style={{ color: '#6c757d' }} icon={faCircleUser} />
                                                </h1>
                                                <p>
                                                    {value.message}
                                                </p>
                                                <br />
                                                <footer style={{ fontSize: '14px' }} className="blockquote-footer">
                                                    <cite title="Source Title">{value.user_name}</cite>
                                                    <cite title="Source Title"> - {value.formated_date}</cite>
                                                </footer>
                                            </div>
                                        );
                                    })}
                                </Slider>
                            </Col>
                            <Col lg={3}></Col>
                        </Row>

                        {loggingstatus === true || loggingstatus === 'true' ?
                            <>
                                {edittestimonials === true ?
                                    <Row style={{ paddingTop: 5, paddingBottom: 20 }}>
                                        <Col className='text-center'>
                                            <button onClick={openmodal} type="button" className="btn btn-secondary">
                                                Edit Testomonial
                                            </button>
                                        </Col>
                                    </Row>
                                    :
                                    // <Row style={{ paddingTop: 5, paddingBottom: 20 }}>
                                    //     <Col className='text-center'>
                                    //         <button onClick={openmodal} type="button" className="btn btn-secondary">
                                    //             Submit Testomonial
                                    //         </button>
                                    //     </Col>
                                    // </Row>
                                    null
                                    }
                            </>
                            : null}
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


            <Modal open={modalopen} onClose={closemodal} center>
                <div className='modal_cnt'>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <div className="con-bottom-inner">
                                        <h6><span style={{ color: '#6c757d', fontWeight: 800 }}>Submit Testimonial</span></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2"></div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>User Name</Form.Label>
                                            <Form.Control type="text" placeholder="" name={'username'} value={loggedusername} disabled />

                                            {form_errormsg.username_errormsg !== '' ?
                                                <span className='error_msg'>{form_errormsg.username_errormsg}</span> : <></>}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows={3} name={'testimonial_msg'} value={form_datas.testimonial_msg} onChange={handleInputChange} />

                                            {form_errormsg.testimonial_msg_errormsg !== '' ?
                                                <span className='error_msg'>{form_errormsg.testimonial_msg_errormsg}</span> : <></>}
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                </div>
                                <div className="col-4">
                                    {edittestimonials === true ?
                                        <button onClick={handletestimonialedit} type="button" className="btn btn-secondary w-100">Submit</button>
                                        :
                                        <button onClick={handletestimonialsubmit} type="button" className="btn btn-secondary w-100">Submit</button>
                                    }
                                </div>
                            </div>
                            <br />
                            {
                                error_msgs.show_success_msg === true ?
                                    <>
                                        <div className="container success_msg_bx w-100">
                                            <h4>{error_msgs.success_msg}</h4>
                                        </div>
                                    </> :
                                    null
                            }
                            {
                                error_msgs.show_error_msg === true ?
                                    <>
                                        <div className="container error_msg_bx w-100">
                                            <h4>{error_msgs.error_msg}</h4>
                                        </div>
                                    </> :
                                    null
                            }
                        </div>
                    </section>
                </div>
            </Modal>

        </>
    );
}

export default HomePage;

