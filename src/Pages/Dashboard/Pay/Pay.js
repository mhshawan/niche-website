import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import CommingSoon from '../../../images/coming-soon.jpg'
import { Container } from 'react-bootstrap';
// import './Pay.css'

const Pay = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container className="product-title">
                <h2 className="text-center mb-5 mt-5">PAY</h2>
                <div className="pay text-center mb-5">
                    <img src={CommingSoon} alt="" className="img-fluid"/>
                </div>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Pay;