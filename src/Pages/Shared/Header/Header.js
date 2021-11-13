import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    const location = <FontAwesomeIcon icon={faLocationArrow} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const clock = <FontAwesomeIcon icon={faClock} />
    return (
        <div className="header mt-2 mb-2">
            <Container>
                <Row>
                    <Col xs={4} md={4}>
                        <span className="headericon">{location}</span> <span>192 ORCHARD ST, OHIO.</span>
                    </Col>
                    <Col xs={4} md={4}>
                        <span className="headericon">{phone}</span> <span>056 83 458 868</span>
                    </Col>
                    <Col xs={4} md={4}>
                        <span className="headericon">{clock}</span> <span>MON-FRI: 8.00 - 17.00</span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;