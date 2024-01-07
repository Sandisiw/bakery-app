import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import about1 from "../img/about-1.jpg";
import about2 from "../img/about-2.jpg";
import team1 from "../img/team-1.jpg";
import team2 from "../img/team-2.jpg";
import team3 from "../img/team-3.jpg";
import team4 from "../img/team-4.jpg";

function About() {
  return (
    <div>
      <NavBar />

      <div
        className="container-fluid page-header py-6 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center pt-5 pb-3">
          <h1 className="display-4 text-white animated slideInDown mb-3">
            About Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link className="text-white" to="#">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link className="text-white" to="#">
                  Pages
                </Link>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                About
              </li>
            </ol>
          </nav>
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
                <p className="text-primary text-uppercase mb-2"> About Us</p>
                <h1 className="display-6 mb-4">
                  We Bake Every Item From The Core Of Our Hearts
                </h1>
                <p>
                  Founded with love in 1974, Sandy Bakery has a rich, fictional history woven with a passion for baking passed down through generations. Our mission is simple: to create moments of joy
                  through irresistible treats. At Sandy Bakery, we value quality, creativity, and community.</p>
                
                <p>
                  Each delightful creation is a testament to our commitment to
                  delivering exceptional flavors that bring people together.
                  Join us in savoring the magic of Sandy Bakery, where every
                  bite is a journey into our delicious traditions and heartfelt
                  values.</p>
                
                <div className="row g-2 mb-4">
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Quality
                    Products
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Custom
                    Products
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Online
                    Order
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Home
                    Delivery
                  </div>
                </div>
                <Link className="btn btn-primary rounded-pill py-3 px-5" to="">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-6">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px;" }}
          >
            <p className="text-primary text-uppercase mb-2"> Our Team</p>
            <h1 className="display-6 mb-4">
              We're Super Professional At Our Skills
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <img className="img-fluid" src={team1} alt="" />
                <div className="team-text">
                  <div className="team-title">
                    <h5>Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social">
                    <Link
                      className="btn btn-square btn-light rounded-circle"
                      to=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                      className="btn btn-square btn-light rounded-circle"
                      to=""
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link
                      className="btn btn-square btn-light rounded-circle"
                      to=""
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <img className="img-fluid" src={team2} alt="" />
                <div className="team-text">
                  <div className="team-title">
                    <h5>Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social">
                    <Link
                      className="btn btn-square btn-light rounded-circle"
                      to=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                      className="btn btn-square btn-light rounded-circle"
                      to=""
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link
                      className="btn btn-square btn-light rounded-circle"
                      to=""
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <img className="img-fluid" src={team3} alt="" />
                <div className="team-text">
                  <div className="team-title">
                    <h5>Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social">
                    <Link
                      className="btn btn-square btn-light rounded-circle"
                      to=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                      className="btn btn-square btn-light rounded-circle"
                      to=""
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link
                      className="btn btn-square btn-light rounded-circle"
                      to=""
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <img className="img-fluid" src={team4} alt="" />
                <div className="team-text">
                  <div className="team-title">
                    <h5>Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social">
                    <Link
                      className="btn btn-square btn-light rounded-circle"
                      to=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                      className="btn btn-square btn-light rounded-circle"
                      to=""
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link
                      className="btn btn-square btn-light rounded-circle"
                      to=""
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
