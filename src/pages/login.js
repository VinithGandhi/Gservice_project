import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faChevronRight, faMobile } from '@fortawesome/free-solid-svg-icons';
import HeaderComp from '../components/header';
import FooterComp from '../components/footer';
import { axiosInstance } from '../Services';
import { useNavigate } from "react-router-dom";
import { Base64 } from 'js-base64';


function LoginPage(props) {

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('logging_status') === true || localStorage.getItem('logging_status') === 'true') {
            navigate("/");
        }
    }, []);


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
                        setTimeout(() => {
                            cleardatas();
                        }, 5000);
                        navigate("/");
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
                <section className="container-fluid bg-semi-dark" style={{ paddingBottom: 50 }}>
                    <div className="container">
                        <div className="intro-section">
                            <div className="pdb-20">
                                <h1 className="white" style={{ fontSize: '0.5rem' }}>&nbsp;</h1>
                            </div>
                        </div>
                    </div>
                </section>

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
                                <div className="col-md-4 offset-md-4">
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
                                <div className="col-md-4 offset-md-4">
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
                                <div className="col-md-4 offset-md-4">
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

                {
                    error_msgs.show_success_msg === true ?
                        <>
                            <div className="container success_msg_bx">
                                <h4>{error_msgs.success_msg}</h4>
                            </div>
                        </> :
                        null
                }
                {
                    error_msgs.show_error_msg === true ?
                        <>
                            <div className="container error_msg_bx">
                                <h4>{error_msgs.error_msg}</h4>
                            </div>
                        </> :
                        null
                }

                <section>
                    <div className="container" style={{ paddingTop: 20, paddingBottom: 60 }}>
                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                <div className="text-center">
                                    <h5><span style={{ color: '#6c757d', fontWeight: 600 }}>Login with</span></h5>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                <button type="button" className="btn btn-primary btn-labeled btn-block w-100" >
                                    <span className="btn-label-social"><i className="fab fa-facebook-f"></i></span> Sign in with Facebook
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                <div style={{ paddingTop: 15 }}>
                                    <button type="button" className="btn btn-danger btn-labeled btn-block w-100" >
                                        <span className="btn-label-social"><i className="fab fa-google-plus-g"></i></span> Sign in with Google+
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


            </main>
            <FooterComp />
        </>
    );
}

export default LoginPage;