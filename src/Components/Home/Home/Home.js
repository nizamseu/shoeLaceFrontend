import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Subscribe from '../Subscribe/Subscribe'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;