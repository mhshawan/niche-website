import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowReview from './ShowReview/ShowReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://radiant-woodland-35702.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className="product-title">
            <h2 className="text-center mb-5">Reviews:{reviews.length}</h2>
            <Container className="mb-5">
                <Row className="gy-5" >
                    {
                     reviews.map(
                         review => <ShowReview
                                     review={review}
                                     key={review._id}
                                    >
    
                                   </ShowReview>
                     )
                    }
                </Row>
            </Container>             
        </div>
    );
};

export default Review;