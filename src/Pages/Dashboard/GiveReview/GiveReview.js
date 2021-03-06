import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const GiveReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const onSubmit = (data) =>{
        data.name = user.displayName;
        console.log(data)
        fetch(`https://radiant-woodland-35702.herokuapp.com/reviews`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
      })
          .then(res => res.json())
          .then(data => {
              if (data.insertedId) {
                  alert('Thanks for giving the review.');
                  reset();
              }
          })
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container>
              <form className="purchase-now-form product-title" onSubmit={handleSubmit(onSubmit)}>
                  <h2 className="text-center mb-5">Give Review</h2>
                <input placeholder="name" defaultValue={user.displayName} {...register("name")} />
                <input placeholder="email" defaultValue={user.email} {...register("email", { required: true })} />
                <textarea style={{display:'block',width:'40%',margin:"auto",boxShadow: "5px 11px 14px -4px #CE8339",border:"none",outline: "none",height:"150px",borderRadius:"3px"}} placeholder="Say something about product" {...register("message", { required: true })} />
                <br />
                <input placeholder="Rating" {...register("rating", { required: true })} />
                <input type="submit" />
              </form> 
          </Container> 





            <Footer></Footer>
        </div>
    );
};

export default GiveReview;