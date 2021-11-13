import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { productName, price, description, imgUrl, _id } = props.product;
    return (

        <Col md={4} sm={6} xs={12} className="card-part">
            <Card className="card product-card shadow-lg">
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Title className="mt-3">Price:{price}</Card.Title>
                    <Card.Text className="card-description mt-3">
                        {description}
                    </Card.Text>
                    <Link to={`/purchase/${_id}`}>
                    <Button>Buy Now</Button>
                    </Link>
                    
                </Card.Body>
            </Card>
        </Col >
    );
};

export default Product;