import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FooterComp(props) {
    return (
        <>
            <section id="footer" className='bg-secondary' style={{ paddingTop: 50, paddingBottom: 50 }}>
                <Container>
                    <Row>
                        <Col lg={7}>
                            <img src="./assets/img/logo.png" alt={'logo'} />
                        </Col>
                        <Col lg={5}>
                            <div style={{ color: '#fff' }}>
                                <p>Contact us / Legal Info / Copy Righ / All other usual stuff</p>
                                <p>&copy Copyright 2022, All Right Reserved</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    );
}

export default FooterComp;