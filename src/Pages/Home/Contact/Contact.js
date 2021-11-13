import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faAddressBook,
    faMailBulk,
    faClock
} from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './Contact.css';

// this variable will show contact page
const Contact = () => {
    return (
        <div>
            <div>
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title product-title">
                                <h2 className="text-center">CONTACT US</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="query">
                <div className="mt-4 mb-5 contact-form">
                    <h2 className="text-dark text-center mb-3">Query</h2>
                    <Form className="w-50 mx-auto mb-2 pt-3">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">            
                            <Form.Control type="email" placeholder="Type Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">                           
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                            <Form.Control as="textarea" rows={3} placeholder="your-message" />
                        </Form.Group>
                        <div className="text-center">
                        <Button size="lg" className="contact-btn"> Submit </Button>
                        </div>
                    </Form>
                </div>
            </div>

            <div className="d-lg-flex justify-content-around mt-5 text-light p-5 contact-footer">
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faPhone} className="fs-1 me-2" />
                    <div>
                        <h3>+8801688496554</h3>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faAddressBook} className="fs-1 me-2" />
                    <div>
                        <h3>Shadhinata Sarani Road</h3>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faMailBulk} className="fs-1 me-2" />
                    <div>
                        <h3>mhshawan7@gmail.com</h3>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faClock} className="fs-1 me-2" />
                    <div>
                        <h3>24/7 service available</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;