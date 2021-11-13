import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Row>
                    <Col className="mt-5">
                        <h3 className="text-light mt-5">LIMITED EDITION</h3>
                        <h1 className="text-light bannertxt ">PORSCHE</h1>
                        <Link to="/exploreMore">
                            <Button variant="primary" className="headerbtn px-5 mt-3">Explore</Button>
                        </Link>
                    </Col>
                    <Col>2 of 2</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;