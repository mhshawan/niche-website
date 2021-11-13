import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const AddProduct = () => {
    // Using Hook Form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch(`https://radiant-woodland-35702.herokuapp.com/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('A New Product Has Been Added Successfully!!');
                    reset();
                }
            })
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="product-title mt-5">
                <h2 className="text-center">Add New Products</h2>
            </div>
            <form className="purchase-now-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("productName", { required: true, maxLength: 20 })} placeholder="productName" />
                <textarea
                    style={{ display: 'block', width: '40%', margin: "auto", boxShadow: "5px 11px 14px -4px #CE8339", border: "none", outline: "none", height: "150px", borderRadius: "3px" }}
                    {...register("description")} placeholder="Description" />
                <input type="text" {...register("price")} placeholder="price" />
                <input {...register("imgUrl")} placeholder="imgUrl" />
                <input type="submit" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;