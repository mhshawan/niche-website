import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;