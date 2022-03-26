import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import HeaderComp from '../components/header';
import FooterComp from '../components/footer';



function LoginPage(props) {
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
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1" style={{ padding: '.75rem' }}><FontAwesomeIcon icon={faUser} /></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 offset-md-4">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1" style={{ padding: '.75rem' }}><FontAwesomeIcon icon={faLock} /></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 offset-md-4">
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