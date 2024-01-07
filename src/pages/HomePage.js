import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import about1 from "../img/about-1.jpg";
import about2 from "../img/about-2.jpg";
import product1 from "../img/product-1.jpg";
import product2 from "../img/product-2.jpg";
import product3 from "../img/product-3.jpg";
import service1 from "../img/service-1.jpg";
import service2 from "../img/service-2.jpg";
import team1 from "../img/team-1.jpg";
import team2 from "../img/team-2.jpg";
import team3 from "../img/team-3.jpg";
import team4 from "../img/team-4.jpg";
import testimonial1 from "../img/testimonial-1.jpg";
import testimonial2 from "../img/testimonial-2.jpg";
import testimonial3 from "../img/testimonial-3.jpg";
import testimonial4 from "../img/testimonial-4.jpg";

function Home(){
    return(
        <div>
            <NavBar />    
            <div class="container-fluid page-header py-6 wow fadeIn" data-wow-delay="0.1s">
            <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-lg-8">
                                
                                <h1 class="display-1 text-light mb-4 animated slideInDown">We Bake With Passion</h1>
                                <p class="text-light fs-5 mb-4 pb-3">Welcome to Sandys Bakery, where every delightful creation is a testament to our passion for baking. Step into a world of irresistible aromas, mouthwatering flavors, and a warm atmosphere that feels like home..</p>
                                <Link to="" class="btn btn-primary rounded-pill py-3 px-5">Read More</Link>
                            </div>
                        </div>
                    </div>
            </div>
            
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-certificate fa-4x text-primary mb-4"></i>
                                <p className="mb-2">Years Experience</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">50</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-users fa-4x text-primary mb-4"></i>
                                <p className="mb-2">Skilled Professionals</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">175</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-bread-slice fa-4x text-primary mb-4"></i>
                                <p className="mb-2">Total Products</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">135</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.7s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-cart-plus fa-4x text-primary mb-4"></i>
                                <p className="mb-2">Order Everyday</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">9357</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row img-twice position-relative h-100">
                                <div className="col-6">
                                    <img className="img-fluid rounded" src={about1} alt="" />
                                </div>
                                <div className="col-6 align-self-end">
                                <img className="img-fluid rounded" src={about2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <p className="text-primary text-uppercase mb-2">About Us</p>
                                <h1 className="display-6 mb-4">We Bake Every Item From The Core Of Our Hearts</h1>
                                <p>Founded with love in 1974, Sandy Bakery has a rich, fictional history woven with a passion for baking passed down through generations. Our mission is simple: to create moments of joy
                  through irresistible treats. At Sandy Bakery, we value quality, creativity, and community.</p>
                                <p>Each delightful creation is a testament to our commitment to
                  delivering exceptional flavors that bring people together.
                  Join us in savoring the magic of Sandy Bakery, where every
                  bite is a journey into our delicious traditions and heartfelt
                  values.</p>
                                <div className="row g-2 mb-4">
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"></i>Quality Products
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"></i>Custom Products
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"></i>Online Order
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"></i>Home Delivery
                                    </div>
                                </div>
                                <Link className="btn btn-primary rounded-pill py-3 px-5" to="">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="container-xxl bg-light my-6 py-6 pt-0">
                <div className="container">
                    <div className="bg-primary text-light rounded-bottom p-5 my-6 mt-0 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6">
                                <h1 className="display-4 text-light mb-0">The Best Bakery In Your City</h1>
                            </div>
                            <div className="col-lg-6 text-lg-end">
                                <div className="d-inline-flex align-items-center text-start">
                                    <i className="fa fa-phone-alt fa-4x flex-shrink-0"></i>
                                    <div className="ms-4">
                                        <p className="fs-5 fw-bold mb-0">Call Us</p>
                                        <p className="fs-1 fw-bold mb-0">+012 345 6789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                        <p className="text-primary text-uppercase mb-2">Bakery Products</p>
                        <h1 className="display-6 mb-4">Explore The Categories Of Our Bakery Products</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                                <div className="text-center p-4">
                                    <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">R50 - R200</div>
                                    <h3 className="mb-3">Cake</h3>
                                    <span>Indulge in heavenly delights with our exquisite cakes</span>
                                </div>
                                <div className="position-relative mt-auto">
                                    <img className="img-fluid" src={product1} alt="" />
                                    <div className="product-overlay">
                                        <Link className="btn btn-lg-square btn-outline-light rounded-circle" to=""><i className="fa fa-eye text-primary"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                                <div className="text-center p-4">
                                    <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">R11 - R99</div>
                                    <h3 className="mb-3">Bread</h3>
                                    <span>Savor the simple pleasures with our freshly baked bread</span>
                                </div>
                                <div className="position-relative mt-auto">
                                    <img className="img-fluid" src={product2} alt="" />
                                    <div className="product-overlay">
                                        <Link className="btn btn-lg-square btn-outline-light rounded-circle" to=""><i className="fa fa-eye text-primary"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                                <div className="text-center p-4">
                                    <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">R11 - R25</div>
                                    <h4 className="mb-3">Cookies</h4>
                                    <span>Indulge in blissful moments with our irresistible cookies</span>
                                </div>
                                <div className="position-relative mt-auto">
                                    <img className="img-fluid" src={product3} alt="" />
                                    <div className="product-overlay">
                                        <Link className="btn btn-lg-square btn-outline-light rounded-circle" to=""><i className="fa fa-eye text-primary"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="text-primary text-uppercase mb-2">Our Services</p>
                            <h1 className="display-6 mb-4">What Do We Offer For You?</h1>
                            <p className="mb-5">We offer a variety of services:</p>
                            <div className="row gy-5 gx-4">
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                            <i className="fa fa-bread-slice text-white"></i>
                                        </div>
                                        <h5 className="mb-0">Quality Products</h5>
                                    </div>
                                    <span>Explore our range of meticulously crafted delights, ensuring a taste of perfection with every bite. Immerse yourself in a symphony of flavors, where quality is our promise.</span>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                            <i className="fa fa-birthday-cake text-white"></i>
                                        </div>
                                        <h5 className="mb-0">Custom Products</h5>
                                    </div>
                                    <span>Tailor your sweet experiences with our custom creations. From personalized cakes to unique confections, we bring your sweetest dreams to life. Let us design a treat that's uniquely yours.</span>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                            <i className="fa fa-cart-plus text-white"></i>
                                        </div>
                                        <h5 className="mb-0">Online Order</h5>
                                    </div>
                                    <span>Convenience at your fingertips! Seamlessly place your orders online, saving you time for what truly matters – enjoying our delectable offerings. A few clicks, and your favorite treats are on their way.</span>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                            <i className="fa fa-truck text-white"></i>
                                        </div>
                                        <h5 className="mb-0">Home Delivery</h5>
                                    </div>
                                    <span>Experience the joy of our treats delivered to your doorstep. Enjoy the ease of indulging in our creations from the comfort of your home. Relish the convenience of Sandy Bakery coming to you.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="row img-twice position-relative h-100">
                                <div className="col-6">
                                    <img className="img-fluid rounded" src={service1} alt="" />
                                </div>
                                <div className="col-6 align-self-end">
                                    <img className="img-fluid rounded" src={service2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                        <p className="text-primary text-uppercase mb-2">Our Team</p>
                        <h1 className="display-6 mb-4">We're Super Professional At Our Skills</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <img className="img-fluid" src={team1} alt="" />
                                <div className="team-text">
                                    <div className="team-title">
                                        <h5>Full Name</h5>
                                        <span>Benjamin Baker</span>
                                    </div>
                                    <div className="team-social">
                                        <Link className="btn btn-square btn-light rounded-circle" to=""><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-square btn-light rounded-circle" to=""><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-square btn-light rounded-circle" to=""><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <img className="img-fluid" src={team2} alt="" />
                                <div className="team-text">
                                    <div className="team-title">
                                        <h5>Full Name</h5>
                                        <span>Alexander Crust</span>
                                    </div>
                                    <div className="team-social">
                                        <Link className="btn btn-square btn-light rounded-circle" to=""><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-square btn-light rounded-circle" to=""><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-square btn-light rounded-circle" to=""><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <img className="img-fluid" src={team3} alt="" />
                                <div className="team-text">
                                    <div className="team-title">
                                        <h5>Full Name</h5>
                                        <span>Matthew Scone</span>
                                    </div>
                                    <div className="team-social">
                                        <Link className="btn btn-square btn-light rounded-circle" to=""><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-square btn-light rounded-circle" to=""><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-square btn-light rounded-circle" to=""><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <img className="img-fluid" src={team4} alt="" />
                                <div className="team-text">
                                    <div className="team-title">
                                        <h5>Full Name</h5>
                                        <span>William Dougherty</span>
                                    </div>
                                    <div className="team-social">
                                        <Link className="btn btn-square btn-light rounded-circle" to=""><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-square btn-light rounded-circle" to=""><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-square btn-light rounded-circle" to=""><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="container-xxl bg-light my-6 py-6 pb-0">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                        <p className="text-primary text-uppercase mb-2">Client's Review</p>
                        <h1 className="display-6 mb-4">More Than 20000+ Customers Trusted Us</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item bg-white rounded p-4">
                            <div className="d-flex align-items-center mb-4">
                                <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial1} alt="" />
                                <div className="ms-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className="testimonial-item bg-white rounded p-4">
                            <div className="d-flex align-items-center mb-4">
                                <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial2} alt="" />
                                <div className="ms-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className="testimonial-item bg-white rounded p-4">
                            <div className="d-flex align-items-center mb-4">
                                <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial3} alt="" />
                                <div className="ms-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className="testimonial-item bg-white rounded p-4">
                            <div className="d-flex align-items-center mb-4">
                                <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial4} alt="" />
                                <div className="ms-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </div>
                    <div className="bg-primary text-light rounded-top p-5 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="display-4 text-light mb-0">Subscribe Our Newsletter</h1>
                            </div>
                            <div className="col-md-6 text-md-end">
                                <div className="position-relative">
                                    <input className="form-control bg-transparent border-light w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                    <button type="button" className="btn btn-dark py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
           </div>
    )
}

export default Home