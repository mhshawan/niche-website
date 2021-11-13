import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ReviewOrders from './ReviewOrders/ReviewOrders';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();
    const {uid} = user;
    useEffect(()=>{
        fetch(`https://radiant-woodland-35702.herokuapp.com/orders/${uid}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[uid]);
    const handleRemove = key => {
        
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://radiant-woodland-35702.herokuapp.com/orders/${key}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const newOrder = orders.filter(order =>  order._id !== key);
                        setOrders(newOrder);;
                    }
                });
        }
    
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="product-title mt-5 mb-5">
            <h2 className="text-center">My Orders</h2>
            <Container className="mt-5">
                <Row>
                {
                orders.map(ordersDetails => <ReviewOrders ordersDetails={ordersDetails} key={ordersDetails._id} handleRemove={handleRemove}> </ReviewOrders>)
                }
                </Row>
            </Container>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MyOrder;