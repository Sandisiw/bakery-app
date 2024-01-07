import React from "react";
import {Link} from "react-router-dom";

import product1 from "../img/product-1.jpg";
import product2 from "../img/product-2.jpg";
import product3 from "../img/product-3.jpg";

function Footer(){
    return(
        <div>
           
           <div className="container-fluid bg-dark text-light footer my-6 mb-0 py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Office Address</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            <div className="d-flex pt-2">
                                <Link className="btn btn-square btn-outline-light rounded-circle me-1" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square btn-outline-light rounded-circle me-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square btn-outline-light rounded-circle me-1" to=""><i className="fab fa-youtube"></i></Link>
                                <Link className="btn btn-square btn-outline-light rounded-circle me-0" to=""><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Quick Links</h4>
                            <Link className="btn btn-link" to="">About Us</Link>
                            <Link className="btn btn-link" to="">Contact Us</Link>
                            <Link className="btn btn-link" to="">Our Services</Link>
                            <Link className="btn btn-link" to="">Terms & Condition</Link>
                            <Link className="btn btn-link" to="">Support</Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Quick Links</h4>
                            <Link className="btn btn-link" to="">About Us</Link>
                            <Link className="btn btn-link" to="">Contact Us</Link>
                            <Link className="btn btn-link" to="">Our Services</Link>
                            <Link className="btn btn-link" to="">Terms & Condition</Link>
                            <Link className="btn btn-link" to="">Support</Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Photo Gallery</h4>
                            <div className="row g-2">
                                <div className="col-4">
                                    <img className="img-fluid bg-light rounded p-1" src={product1} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light rounded p-1" src={product2} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light rounded p-1" src={product3} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light rounded p-1" src={product2} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light rounded p-1" src={product3} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light rounded p-1" src={product1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="container-fluid copyright text-light py-4 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <Link to="">P.M Bakery</Link>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end" style={{display:"none"}}>
                            Designed By <Link to="https://htmlcodex.com">HTML Codex</Link>
                            <br />Distributed By: <Link className="border-bottom" to="https://themewagon.com" target="_blank">ThemeWagon</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <Link to="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></Link>      
        
        </div>
    )
}

export default Footer
