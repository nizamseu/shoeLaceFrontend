
import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import './footer.css'
const Footer = () => {
   const date= new Date().getFullYear()
    return (
        <div style={{color:'gray'}} className='row d-flex justify-content-center mt-5 p-5 '>
           
           <div className="col-md-4">
             
              <h1>ShoeLace</h1>
            <p style={{textAlign:'justify'}}>  A Shole Shop is a private retailer or public service that provides travel and tourism-related services to the people. And suppliers such as activities, airlines, car rentals, cruise lines, hotels, railways, travel insurance, and package tours. Here you can know about the Top 10 Travel Agency in Bangladesh.</p>
            </div>



           <div className="col-md-4">
              <h5 style={{color:'brand-color',marginBottom:'35px'}}>Our Services</h5>
              <Link className='footer' to='/'>Home</Link> <br />
              <Link className='footer' to='/about'>About</Link><br />
             <Link className='footer' to='/#'>Dashboard</Link><br />
              <Link className='footer' to='/#'>Manage Item</Link><br />
            </div>  



         


           <div className="col-md-4">
              <h5 style={{color:'brand-color',marginBottom:'35px'}}> Our Address</h5>
             <h6> Porana Polton, Dhaka-1200</h6>
               <div style={{color:'#1CC7C1'}} className='mt-5 mb-5'>
               <p className='icon'>
                  <GoogleIcon  />
                  <FacebookIcon  />
                  <TwitterIcon  /></p>
                
                
            
               </div>
               <h6>Call Now</h6>
               <button variant="contained" color="primary">+01827612791</button>
            </div>
<h6 className='text-center mt-5'> copyright {date} All Right Reserved </h6>
        </div>
    );
};

export default Footer;