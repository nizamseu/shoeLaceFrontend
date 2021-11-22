import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import HomePageProducts from "../Products/HomePageProducts";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Subscribe from "../Subscribe/Subscribe";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomePageProducts></HomePageProducts>
      {/* <Products></Products> */}
      <Reviews></Reviews>
      <About></About>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
