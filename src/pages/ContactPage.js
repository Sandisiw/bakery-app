import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Contact(){
    return(
        <div>   
            <NavBar />         
            
            <div className="container-fluid page-header py-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center pt-5 pb-3">
                    <h1 className="display-4 text-white animated slideInDown mb-3">Contact Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><Link className="text-white" to="#">Home</Link></li>
                            <li className="breadcrumb-item"><Link className="text-white" to="#">Pages</Link></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
            
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                        <p className="text-primary text-uppercase mb-2">Contact Us</p>
                        <h1 className="display-6 mb-4">If You Have Any Query, Please Contact Us</h1>
                    </div>
                    <div className="row g-0 justify-content-center">
                        <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <Link to="https://htmlcodex.com/contact-form">Download Now</Link>.</p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '200px'}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           
            <Footer />
        </div>
    )
}

export default Contact
