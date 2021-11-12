import React from 'react';
import Button from '@mui/material/Button';
import SimpleImageSlider from "react-simple-image-slider";
import img1 from '../../../images/appointment-bg.png'
import img2 from '../../../images/bg.png'
import img3 from '../../../images/chair.png'
import { Link } from 'react-router-dom';

const Banner = () => {
   
    const images = [
        { url: 'https://cdn.shopify.com/s/files/1/2287/9679/files/fantastic-friday-10-web-banner.jpg?v=1636639639' },
        { url: 'https://cdn.shopify.com/s/files/1/2287/9679/files/power-pro-web-banner.jpg?v=1635674679' },
        { url: 'https://cdn.shopify.com/s/files/1/2287/9679/files/MC-web-banner.jpg?v=1634127036' },
       {url:'https://cdn.shopify.com/s/files/1/2287/9679/files/HP-web-banner_617d82b6-318a-4d81-a302-84fa2cb935bd.jpg?v=1634098215'},
       {url:'https://cdn.shopify.com/s/files/1/2287/9679/files/NS-web-banner2.jpg?v=1634180451'},
       {url:'https://cdn.shopify.com/s/files/1/2287/9679/files/weinbrenner-web-banner.jpg?v=1634098552'},
       {url:'https://cdn.shopify.com/s/files/1/2287/9679/files/Justice-Luegue-banner.jpg?v=1635415091'},
      ];
    return ( 
    <div>
      <SimpleImageSlider
      style={{position:'relative'}}
        width={"100%"}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2.0}
      />
      <Button variant="contained" color='error' style={{zIndex:2,marginTop:'-100px',marginLeft:'100px',position:'absolute'}}>
        <Link style={{textDecoration:'none',color:'white'}} to={'/products'}>Poducts</Link>
        </Button>
    </div>
    );
};

export default Banner;