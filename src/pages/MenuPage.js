import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import product1 from "../img/product-1.jpg";
import product2 from "../img/product-2.jpg";
import product3 from "../img/product-3.jpg";

function Menu(){
    return(
        <div>   
            <NavBar />         
           
            <div class="container-fluid page-header py-6 wow fadeIn" data-wow-delay="0.1s">
                <div class="container text-center pt-5 pb-3">
                    <h1 class="display-4 text-white animated slideInDown mb-3">Menu</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item"><Link class="text-white" to="#">Home</Link></li>
                            <li class="breadcrumb-item"><Link class="text-white" to="#">Pages</Link></li>
                            <li class="breadcrumb-item text-primary active" aria-current="page">Menu</li>
                        </ol>
                    </nav>
                </div>
            </div>
           
            <div class="container-xxl bg-light my-6 py-6 pt-0" style={{margin: '12rem 0'}}>
                <div class="container">
                    <div class="bg-primary text-light rounded-bottom p-5 my-6 mt-0 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="row g-4 align-items-center">
                            <div class="col-lg-6">
                                <h1 class="display-4 text-light mb-0">The Best Bakery In Your City</h1>
                            </div>
                            <div class="col-lg-6 text-lg-end">
                                <div class="d-inline-flex align-items-center text-start">
                                    <i class="fa fa-phone-alt fa-4x flex-shrink-0"></i>
                                    <div class="ms-4">
                                        <p class="fs-5 fw-bold mb-0">Call Us</p>
                                        <p class="fs-1 fw-bold mb-0">+012 345 6789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                        <p class="text-primary text-uppercase mb-2"> Bakery Products</p>
                        <h1 class="display-6 mb-4">Explore The Categories Of Our Menu</h1>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                                <div class="text-center p-4">
                                    <div class="d-inline-block border border-primary rounded-pill px-3 mb-3">R50 - R200</div>
                                    <h3 class="mb-3">Cake</h3>
                                    <span>Indulge in heavenly delights with our exquisite cakes</span>
                                </div>
                                <div class="position-relative mt-auto">
                                    <img class="img-fluid" src={product1} alt="" />
                                    <div class="product-overlay">
                                        <Link class="btn btn-lg-square btn-outline-light rounded-circle" to=""><i class="fa fa-eye text-primary"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                                <div class="text-center p-4">
                                    <div class="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">R25 - R99</div>
                                    <h3 class="mb-3">Bread</h3>
                                    <span>Savor the simple pleasures with our freshly baked bread</span>
                                </div>
                                <div class="position-relative mt-auto">
                                    <img class="img-fluid" src={product2} alt="" />
                                    <div class="product-overlay">
                                        <Link class="btn btn-lg-square btn-outline-light rounded-circle" to=""><i class="fa fa-eye text-primary"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                                <div class="text-center p-4">
                                    <div class="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">R11 - R99</div>
                                    <h4 class="mb-3">Cookies</h4>
                                    <span>Indulge in blissful moments with our irresistible cookies </span>
                                </div>
                                <div class="position-relative mt-auto">
                                    <img class="img-fluid" src={product3} alt="" />
                                    <div class="product-overlay">
                                        <Link class="btn btn-lg-square btn-outline-light rounded-circle" to=""><i class="fa fa-eye text-primary"></i></Link>
                                    </div>
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

export default Menu
