import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders)
    useEffect(() => {
        fetch(`https://radiant-woodland-35702.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    const handleApproveStatus = key => {
        const url = `https://radiant-woodland-35702.herokuapp.com/orders/${key}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Order Status Updated Successfully');
                    // For Refreshing Page
                    window.location.reload();
                }
            })
    }
    return (

        <div>
            <Navigation></Navigation>
            <Container>
            <div className="product-title mt-5">
                <h2 className="text-center">Manage All Orders</h2>
            </div>
                <h4 className="text-center mt-5 mb-5">Total Order Collection:{orders.length}</h4>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Order Status</th>
                            <th>Approve</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(
                                order => <tr
                                    key={order._id}>
                                    <td>{order.name}</td>
                                    <td>{order.order.productName}</td>
                                    <td>{order.orderStatus}</td>
                                    <td ><button className="headerbtn px-3 py-2 text-white" onClick={() => handleApproveStatus(order._id)}>Approve</button></td>

                                </tr>
                            )
                        }

                        {/* 
                      */}


                    </tbody>
                </Table>
            </Container>


            <Footer></Footer>
        </div>
    );
};

export default ManageAllOrders;