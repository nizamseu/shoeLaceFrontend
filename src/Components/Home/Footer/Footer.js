import React from 'react';
import './footer.css'
const Footer = () => {
    return (
        <footer style={{marginTop:'-15px'}} className="w-100 py-4 flex-shrink-0 ">
        <div className="container py-4 bodycolor ">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 text-white">FB.</h5>
                    <p className="small text-muted">
                    The number one shoe manufacturing company in the world is currently ShoeLace, who is also the world's second-largest apparel company (the first being the luxury fashion empire, Christian Dio
                        </p>
                    <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="https://shoelace-4c4a8.web.app/">ShoeLace</a></p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">LogIn</a></li>
                        <li><a href="#">DashBoard</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Get started</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-3">Newsletter</h5>
                    <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <form action="#">
                        {/* <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-primary" id="button-addon2" type="button">Subscribe Now</button>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;