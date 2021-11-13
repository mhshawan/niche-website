import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Product from '../Home/Product/Product';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Navigation from '../Shared/Navigation/Navigation';
import './ExploreMore.css'

const ExploreMore = () => {
    const { products } = useProducts();
    return (
        <>
            <Header></Header>
            <Navigation></Navigation>
            <Col className="explore-more-banner my-auto product-title mt-5">
                <h2 className="text-center" >CAR COLLECTIONS</h2>
            </Col>
            <Container className="explore">

                <Row className="gy-5 mt-5 mb-5" >
                    {
                        products.map(
                            product => <Product
                                product={product}
                                key={product._id}
                            >

                            </Product>
                        )
                    }
                </Row>
            </Container>

            <Footer></Footer>
        </>
    );
};

export default ExploreMore;