import React, { useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://radiant-woodland-35702.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                    
                }

            })

        e.preventDefault()
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="product-title mt-5">
                <h2 className="text-center">Make Admin</h2>
            </div>
              <form className="purchase-now-form" onSubmit={handleAdminSubmit}>
                  <input
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                 <div style={{textAlign:'center'}}>
                 <button className="headerbtn px-3 py-2 mt-3" type="submit" style={{color:'#fff'}} >Submit</button>
                 </div>
               </form> 
               <Container>
                  {
                      success && <Alert variant="success">
                      Admin Created Successfully!
                    </Alert> 
                  }
               </Container>

            <Footer></Footer>
        </div>
    );
};

export default MakeAdmin;