import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faCalendarCheck, faList, faCartPlus, faAnglesRight, faUserCircle, faMobile, faLock, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import HeaderComp from '../components/header';
import FooterComp from '../components/footer';
import BannerMenuComp from '../components/bannermenu';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Base64 } from 'js-base64';
import { axiosInstance } from '../Services';
import { useNavigate } from "react-router-dom";
import SearchComp from '../components/search';


function ServicesPage(props) {
    const navigate = useNavigate();

    const [showComments, setshowComments] = useState(false);
    const [servesdata, setservesdata] = useState([]);
    const [loggingstatus, setloggingstatus] = useState(false);
    const [loggedusername, setloggedusername] = useState('');
    useEffect(() => {
        if (localStorage.getItem('logging_status') !== null && localStorage.getItem('logging_status') !== undefined) {
            setloggingstatus(localStorage.getItem('logging_status'));
            setloggedusername(Base64.decode(localStorage.getItem('gsun')));
        } else {
            setloggingstatus(false);
        }
        getservesdetails();
    }, []);

    function getservesdetails() {
        var url = window.location.href;
        var parts = url.split('/');
        axiosInstance.get('/Serves', { params: { serves: parts[4] } })
            .then((res) => {
                setservesdata(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

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
    const [cartmodalopen, setcartmodalopen] = useState(false);

    const openloginmodal = () => setloginmodalopen(true);
    const closeloginmodal = () => setloginmodalopen(false);


    const opencartmodal = () => setcartmodalopen(true);
    const closecartmodal = () => setcartmodalopen(false);

    const [proceduremodalopen, setproceduremodalopen] = useState(false);

    const openproceduremodal = () => setproceduremodalopen(true);
    const closeproceduremodal = () => setproceduremodalopen(false);

    function handeladdtocart() {
        if (loggingstatus === true || loggingstatus === 'true') {
            opencartmodal();
        }
        else {
            openloginmodal();
        }
    }



    const [form_datas, setFomdatas] = useState({
        username: '',
        password: '',
    });

    const [error_msgs, seterror_msgs] = useState({
        show_success_msg: false,
        success_msg: '',
        show_error_msg: false,
        error_msg: '',
    });

    const [form_errormsg, setformerrormsg] = useState({
        username_errormsg: "",
        password_errormsg: "",
    });

    function handleInputChange(event) {
        if (event.target.name === "username") {
            setFomdatas({
                ...form_datas,
                username: event.target.value
            });
        }
        if (event.target.name === "password") {
            setFomdatas({
                ...form_datas,
                password: event.target.value,
            });
        }
    }

    function formvalidation() {

        let username_errormsg = '';
        let password_errormsg = '';

        if (!form_datas.username) {
            username_errormsg = "Mobile number cannot be blank";
        }
        else if (form_datas.username.length !== 10) {
            username_errormsg = "Enter Valid mobile number";
        }

        if (!form_datas.password) {
            password_errormsg = "Password cannot be blank";
        }

        if (username_errormsg || password_errormsg) {
            setformerrormsg({
                username_errormsg: username_errormsg,
                password_errormsg: password_errormsg,
            });
            return false;
        }
        else {
            return true;
        }
    }


    function handleregister() {
        const validated = formvalidation();
        if (validated) {
            setformerrormsg({
                username_errormsg: "",
                password_errormsg: "",
            });
            const JSONvalue = form_datas;
            axiosInstance.post('/Login', JSONvalue)
                .then((res) => {
                    if (res.data.status === 'success') {
                        localStorage.setItem('authTokens', JSON.stringify(res.data.data["authToken"]));
                        localStorage.setItem('logging_status', true);
                        localStorage.setItem('gsun', Base64.encode(res.data.data["username"], true));
                        localStorage.setItem('gsud', Base64.encode(res.data.data["userid"], true));
                        seterror_msgs({
                            show_success_msg: true,
                            success_msg: res.data.msg,
                            show_error_msg: false,
                            error_msg: ''
                        });
                        setFomdatas({
                            username: '',
                            password: '',
                        });
                        window.location.reload();
                        setTimeout(() => {
                            cleardatas();
                            closeloginmodal();
                        }, 5000);
                    }
                    else if (res.data.status === 'failed') {
                        seterror_msgs({
                            show_success_msg: false,
                            success_msg: '',
                            show_error_msg: true,
                            error_msg: res.data.msg
                        });
                        setTimeout(() => {
                            cleardatas();
                        }, 5000);
                    }
                })
                .catch(() => {
                    seterror_msgs({
                        ...error_msgs,
                        show_error_msg: true,
                        error_msg: 'Something went wrong please try again'
                    });
                    setTimeout(() => {
                        cleardatas();
                    }, 5000);
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
    function navigatetohone() {
        navigate("/");
    }



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
                                        <SearchComp />
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

                {servesdata.length > 0 ?
                    <>
                        <section id='dynamic_banner'>
                            <Container>
                                <Row>
                                    <Col lg={2}></Col>
                                    <Col lg={8}>
                                        <div className="con-bottom-inner">
                                            <div className='padding_20'>
                                                <h4>
                                                    <span style={{ color: '#6c757d', fontWeight: 800 }}>{servesdata[0]["serves_name"]} </span>
                                                </h4>
                                                <p>{servesdata[0]["serves_details"]}</p>
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
                                                            <small>{servesdata[0]["output"]}</small>
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
                                                        <span style={{ fontWeight: 600, fontSize: '30px' }} >&#8377; {servesdata[0]["charges"]}</span>
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
                                                        <span style={{ fontWeight: 600, fontSize: '30px' }}>{servesdata[0]["time_taken"]}</span>
                                                        <p><small>Sed non dignissim magna. Integer ultricies est sit amet dolor
                                                            ultrices</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-xs-12" style={{ paddingBottom: 20 }}
                                        >
                                            <div className="card-addon-on b_block">
                                                <div className="card"
                                                    style={{ width: "auto", height: "200px", padding: "10px", boxShadow: "0px 0px 7px 1px #00000047" }}>
                                                    <div className="card-body text-center">
                                                        <div style={{ paddingBottom: 20 }}>
                                                            <span style={{ color: '#6c757d', fontSize: '50px' }}>
                                                                <FontAwesomeIcon icon={faList} />
                                                            </span>
                                                        </div>
                                                        <span className="card-text"
                                                            style={{ fontSize: "15px", fontWeight: 700, color: "#000" }}>ADD ON</span>
                                                        <br></br>
                                                        {servesdata[0]["addon_status"] === 'no' ?
                                                            <span className='noaddons_data'>No Addons found</span>
                                                            :
                                                            null}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="card-addon-off b_none">
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
                                </div> */}
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
                                            style={{ color: "#fff", backgroundColor: "#ab5d40" }} onClick={handeladdtocart}>
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
                    </>


                    :

                    <section>
                        <div className="container" style={{ paddingTop: "150px", paddingBottom: "150px" }}>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <p><strong>No data found</strong></p>
                                </div>
                            </div>
                        </div>
                    </section>
                }



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
                                            <div className="form-group mb-3">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="" style={{ padding: '.75rem' }}><FontAwesomeIcon icon={faMobile} /></span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="+91" disabled />
                                                    <input type="text" className="form-control" data-inputmask="'mask': '99999 99999'" placeholder="Mobile number" style={{ width: '60%' }} name="username" value={form_datas.username} onChange={handleInputChange} maxLength={10} />
                                                </div>
                                                {form_errormsg.username_errormsg !== '' ?
                                                    <span className='error_msg'>{form_errormsg.username_errormsg}</span> : <></>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group mb-3">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1" style={{ padding: '.75rem' }}><FontAwesomeIcon icon={faLock} /></span>
                                                    </div>
                                                    <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" name='password' value={form_datas.password} onChange={handleInputChange} />
                                                </div>
                                                {form_errormsg.password_errormsg !== '' ?
                                                    <span className='error_msg'>{form_errormsg.password_errormsg}</span> : <></>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-6">
                                                    <button onClick={navigatetohone} type="button" className="btn btn-secondary btn-block w-100" >
                                                        Cancel
                                                    </button>
                                                </div>
                                                <div className="col-6">
                                                    <p className="btn btn-secondary btn-block w-100" onClick={handleregister} >
                                                        <span style={{ padding: 10 }}> <FontAwesomeIcon icon={faChevronRight} /> </span> Login
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row" style={{ paddingTop: 10 }}>
                                                <div className="col-6 social">
                                                    <a href="#password">Forget Password</a>
                                                </div>
                                                <div className="col-6 social">
                                                    <a href="/register">Register</a>
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

                <Modal open={cartmodalopen} onClose={closecartmodal} center>
                    <div className='modal_cnt'>
                        <section>
                            <div className="container">
                                <div className="row">
                                    <div className="col-2"></div>
                                    <div className="col-8">
                                        <div className="con-bottom-inner" style={{ paddingBottom: '10px' }}>
                                            <h3><span style={{ color: '#6c757d', fontWeight: 800 }}>Add to cart</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card-body"
                                        style={{ padding: "15px" }}>
                                        <p>Select Add on</p>
                                        {servesdata.length > 0 ?
                                            <>
                                                {servesdata[0]["addon_status"] === 'no' ?
                                                    <p>No addon found</p>
                                                    :
                                                    <>
                                                        <ul style={{ paddingInlineStart: '2px', textAlign: 'left', listStyleType: 'none', cursor: "pointer" }}>
                                                            {servesdata[0]["addon_lis"].map((value, index) => {
                                                                return (
                                                                    <li style={{ padding: "6px" }} key={index}><input type="checkbox" className="input-assumpte" /> {value.addon_name}</li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </>}
                                            </> :
                                            <p className='text-center'>
                                                No data found
                                            </p>}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                    </div>
                                    <div className="col-4">
                                        <button type="button" className="btn btn-secondary w-100">processed</button>
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
                        {servesdata.length > 0 ?
                            <>
                                <section>
                                    <div className="container" style={{ paddingTop: 20 }}>
                                        <div className="text-center">
                                            <h4><span style={{ color: "#6c757d" }}>Procedures for {servesdata[0]["serves_name"]}</span></h4>
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
                                                                {servesdata[0]["procedures"].length > 0 ?
                                                                    <>
                                                                        {servesdata[0]["procedures"].map((value, index) => {
                                                                            var myindex = index + 1;
                                                                            return (
                                                                                <tr key={index}>
                                                                                    <td>
                                                                                        <div style={{ backgroundColor: "#ccc", padding: 10, textAlign: "center", fontWeight: 500 }}>
                                                                                            {myindex}
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        &nbsp; {value.procedures_dtl}
                                                                                    </td>
                                                                                </tr>
                                                                            );
                                                                        })}

                                                                    </>
                                                                    :
                                                                    <tr>
                                                                        <td>
                                                                            No procedures found
                                                                        </td>
                                                                    </tr>}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                            : <p>No procedures found</p>}


                    </div>


                </Modal>



                <FooterComp />
            </main>
        </>
    );
}

export default ServicesPage;

