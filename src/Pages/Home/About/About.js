import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {

    return (
        <>
            <div>
                <Container className="mt-5">
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="product-title mb-5">
                                <h2 className="text-center">WHY CHOOSE US</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


            <div className="why-people-choose-us-section">
                <Container>
                    <Row>
                        <Col md={4} sm={12} xs={12} className="mb-5">
                            <div className="why-people-choose-details">
                                <div className="why-people-detail text-start">
                                    <h2>EXCELLENT
                                        CAR DEALERSHIP</h2>
                                    <p>Corify is a leading two-sided digital automotive dealership that connects car shoppers with sellers. Launched in 1998 and headquartered in Chicago, the company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers.
                                    </p>
                                    <h6 className="director">NEYMAR JR</h6>
                                    <span>Director of Carify Center</span>
                                </div>
                            </div>
                        </Col>

                        <Col md={8} sm={12} xs={12}>
                            <div className="achievement-section">
                                <Container>
                                    <Row>
                                        <Col md={6} sm={12} xs={12}>
                                            <div className="achievement-inner">
                                                <h2 className='achievement-one'>900+</h2>
                                                <p>VEHICLES AVAILABLE RIGHT NOW</p>
                                            </div>
                                        </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <div className="achievement-inner">
                                                <h2 className='achievement-two'>250+</h2>
                                                <p>HAPPY & TRUSTED CUSTOMERS</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6} sm={12} xs={12}>
                                            <div className="achievement-inner">
                                                <h2 className='achievement-three'>125</h2>
                                                <p>CAR MAKES AND MODELS</p>
                                            </div>
                                        </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <div className="achievement-inner">
                                                <h2 className='achievement-four'>68</h2>
                                                <p>RECOGNITION AND AWARDS</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

        </>
    );
};

export default About;