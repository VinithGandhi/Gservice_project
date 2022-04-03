import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronRight, faMobile, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import HeaderComp from '../components/header';
import FooterComp from '../components/footer';
import { axiosInstance } from '../Services';
import { useNavigate } from "react-router-dom";

function RegisterPage(props) {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('logging_status') === true || localStorage.getItem('logging_status') === 'true') {
            navigate("/");
        }
    }, []);
    const [form_datas, setFomdatas] = useState({
        first_name: '',
        last_name: '',
        email_id: '',
        mobile_no: '',
        mobile_prefix: '+91',
        password: '',
        cpassword: '',
    });

    const [error_msgs, seterror_msgs] = useState({
        show_success_msg: false,
        success_msg: '',
        show_error_msg: false,
        error_msg: '',
    });

    const [form_errormsg, setformerrormsg] = useState({
        first_name_errormsg: "",
        last_name_errormsg: "",
        email_id_errormsg: "",
        mobile_no_errormsg: "",
    });

    function handleInputChange(event) {
        if (event.target.name === "first_name") {
            setFomdatas({
                ...form_datas,
                first_name: event.target.value
            });
        }
        if (event.target.name === "last_name") {
            setFomdatas({
                ...form_datas,
                last_name: event.target.value,
            });
        }
        if (event.target.name === "email_id") {
            setFomdatas({
                ...form_datas,
                email_id: event.target.value,
            });
        }
        if (event.target.name === "mobile_no") {
            setFomdatas({
                ...form_datas,
                mobile_no: event.target.value,
            });
        }
        if (event.target.name === "password") {
            setFomdatas({
                ...form_datas,
                password: event.target.value,
            });
        }
        if (event.target.name === "cpassword") {
            setFomdatas({
                ...form_datas,
                cpassword: event.target.value,
            });
        }
    }

    function formvalidation() {
        let first_name_errormsg = '';
        let last_name_errormsg = '';
        let email_id_errormsg = '';
        let mobile_no_errormsg = '';
        let password_errormsg = '';
        var mailformat = /(^\w.*@\w+\.\w)/;
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@_#%&])(?=.{8,})");

        if (!form_datas.first_name) {
            first_name_errormsg = "First name cannot be blank";
        }
        if (!form_datas.last_name) {
            last_name_errormsg = "Last name cannot be blank";
        }

        if (!form_datas.mobile_no) {
            mobile_no_errormsg = "Mobile number cannot be blank";
        }
        else if (form_datas.mobile_no.length !== 10) {
            mobile_no_errormsg = "Enter Valid mobile number";
        }

        if (!form_datas.email_id) {
            email_id_errormsg = "Email-id cannot be blank";
        }
        else if (mailformat.test(form_datas.email_id) === false) {
            email_id_errormsg = "Enter Valid Email";
        }

        if (!form_datas.password) {
            password_errormsg = "Password cannot be blank";
        }
        else if (form_datas.password < 8) {
            password_errormsg = "Password should be 8 characters";
        }
        else if (!strongRegex.test(form_datas.password)) {
            password_errormsg = "use special character, number and capital letter";
        }
        else if (form_datas.cpassword !== '' && form_datas.password !== form_datas.cpassword) {
            password_errormsg = "The password and confirmation password do not match.";
        }


        if (first_name_errormsg || last_name_errormsg || email_id_errormsg || mobile_no_errormsg || password_errormsg) {
            setformerrormsg({
                first_name_errormsg: first_name_errormsg,
                last_name_errormsg: last_name_errormsg,
                email_id_errormsg: email_id_errormsg,
                mobile_no_errormsg: mobile_no_errormsg,
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
                first_name_errormsg: "",
                last_name_errormsg: "",
                email_id_errormsg: "",
                mobile_no_errormsg: "",
            });
            const JSONvalue = form_datas;
            delete JSONvalue['cpassword'];
            axiosInstance.post('/Register', JSONvalue)
                .then((res) => {
                    if (res.data.status === 'success') {
                        seterror_msgs({
                            show_success_msg: true,
                            success_msg: res.data.msg,
                            show_error_msg: false,
                            error_msg: ''
                        });
                        setFomdatas({
                            first_name: '',
                            last_name: '',
                            email_id: '',
                            mobile_no: '',
                            mobile_prefix: '+91',
                            password: '',
                            cpassword: '',
                        });
                        setTimeout(() => {
                            cleardatas();
                            navigate('/login');
                        }, 3000);
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
                                    <h3><span style={{ color: '#6c757d', fontWeight: 800 }}>Registration</span></h3>
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
                                                <span className="input-group-text" id="basic-addon1" style={{ padding: '.75rem' }}><FontAwesomeIcon icon={faUser} /></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="First Name" name="first_name" value={form_datas.first_name} onChange={handleInputChange} />
                                        </div>
                                        {form_errormsg.first_name_errormsg !== '' ?
                                            <span className='error_msg'>{form_errormsg.first_name_errormsg}</span> : <></>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1" style={{ padding: '.75rem' }}><FontAwesomeIcon icon={faUser} /></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Last Name" name="last_name" value={form_datas.last_name} onChange={handleInputChange} />
                                        </div>

                                        {form_errormsg.last_name_errormsg !== '' ?
                                            <span className='error_msg'>{form_errormsg.last_name_errormsg}</span> : <></>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="" style={{ padding: '.75rem' }}><FontAwesomeIcon icon={faMobile} /></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="+91" disabled />
                                            <input type="text" className="form-control" data-inputmask="'mask': '99999 99999'" placeholder="Mobile number" style={{ width: '60%' }} name="mobile_no" value={form_datas.mobile_no} onChange={handleInputChange} maxLength={10} />
                                        </div>
                                        {form_errormsg.mobile_no_errormsg !== '' ?
                                            <span className='error_msg'>{form_errormsg.mobile_no_errormsg}</span> : <></>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1" style={{ padding: '.75rem' }}><FontAwesomeIcon icon={faEnvelope} /></span>
                                            </div>
                                            <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" name="email_id" value={form_datas.email_id} onChange={handleInputChange} />
                                        </div>
                                        {form_errormsg.email_id_errormsg !== '' ?
                                            <span className='error_msg'>{form_errormsg.email_id_errormsg}</span> : <></>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1" style={{ padding: '.75rem' }}><FontAwesomeIcon icon={faLock} /></span>
                                            </div>
                                            <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" name="password" value={form_datas.password} onChange={handleInputChange} />
                                        </div>
                                        {/* {form_errormsg.password_errormsg !== '' ?
                                            <span className='error_msg'>{form_errormsg.password_errormsg}</span> : <></>} */}
                                    </div>
                                    <div className="form-group mb-3">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1" style={{ padding: '.75rem' }}><FontAwesomeIcon icon={faLock} /></span>
                                            </div>
                                            <input type="password" className="form-control" placeholder="Confirm password" aria-label="Confirm_password" aria-describedby="basic-addon1" name="cpassword" value={form_datas.cpassword} onChange={handleInputChange} />
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
                                            <p type="button" className="btn btn-secondary btn-block w-100"
                                                onClick={handleregister} >
                                                <span style={{ padding: 10 }}> <FontAwesomeIcon icon={faChevronRight} /> </span> Register
                                            </p>
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

export default RegisterPage;