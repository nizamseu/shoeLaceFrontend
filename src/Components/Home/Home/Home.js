import React from 'react';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;