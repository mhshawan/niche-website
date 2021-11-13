import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const { products } = useProducts({});

    return (
        <>
            <Container className='my-5 py-5'>
                <Row>
                    <div className="product-title mb-5">
                        <h2 className="text-center">OUR CARS</h2>
                    </div>
                </Row>
                <Row className="gy-4">
                    {
                        products.slice(0, 6).map(
                            product => <Product
                                product={product}
                                key={product._id}
                            >

                            </Product>
                        )
                    }
                </Row>
            </Container>
        </>
    );
};

export default Products;