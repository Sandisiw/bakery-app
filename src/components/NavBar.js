import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <div>
           {/* 
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary" role="status"></div>
            </div>
            */}
            <div className="container-fluid top-bar bg-dark text-light px-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="row gx-0 align-items-center d-none d-lg-flex">
                    <div className="col-lg-6 px-5 text-start">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link className="small text-light" to="/">Home</Link></li>
                            
                            <li className="breadcrumb-item"><Link className="small text-light" to="">Terms</Link></li>
                            <li className="breadcrumb-item"><Link className="small text-light" to="">Privacy</Link></li>
                        </ol>
                    </div>
                    <div className="col-lg-6 px-5 text-end">
                        <small>Follow us:</small>
                        <div className="h-100 d-inline-flex align-items-center">
                            <Link className="btn-lg-square text-primary border-end rounded-0" to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn-lg-square text-primary border-end rounded-0" to=""><i className="fab fa-twitter"></i></Link>
                            <Link className="btn-lg-square text-primary border-end rounded-0" to=""><i className="fab fa-linkedin-in"></i></Link>
                            <Link className="btn-lg-square text-primary pe-0" to=""><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
           
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s" style={{marginTop:'20px'}}>
                <Link to="home" className="navbar-brand ms-4 ms-lg-0">
                    <h1 className="text-primary m-0">Baker</h1>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto p-4 p-lg-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About Us</Link>
                        <Link to="/menu" className="nav-item nav-link">Menu</Link>
                        
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    <div className=" d-none d-lg-flex">
                        <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
                            <i className="fa fa-phone text-primary"></i>
                        </div>
                        <div className="ps-3">
                            <small className="text-primary mb-0">Call Us</small>
                            <p className="text-light fs-5 mb-0">+012 345 6789</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
