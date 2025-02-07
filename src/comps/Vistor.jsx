import React, { useState } from 'react'

import { Link, Outlet } from 'react-router-dom'
import Home from './Home'
import BookDemo from './BookDemo';
import Gallary from './Gallary';



export default function Vistor() {
  // // State for dropdown visibility
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // // Functions to handle mouse events
  // const handleMouseEnter = () => {
  //   setIsDropdownOpen(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsDropdownOpen(false);
  // };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  const handleSubMenuMouseEnter = () => setIsSubMenuOpen(true);
  const handleSubMenuMouseLeave = () => setIsSubMenuOpen(false);

  return (
    <div >

      {/* <!-- Top Bar --> */}
      <div className="top-bar d-flex justify-content-between align-items-center flex-wrap rounded">
        <div>
          <i className="bi bi-geo-alt" ></i> Enter your location pin-code
        </div>
        <div className="d-flex flex-wrap align-items-center">
          <span className="me-3"><i className="bi bi-envelope" style={{ color: "#FF0000" }}></i> xxxxgmail.com</span>
          <span className="me-3"><i className="bi bi-whatsapp" style={{ color: '#25D366' }}></i> +919739101344</span>
          <span><i className="bi bi-telephone"></i> Customer Support: 1800-570-1000</span>
        </div>
        <div>
          <Link to={"/"}>Store Locator</Link>
          <Link to={"/"}>Contact Us</Link>
        </div>
      </div>

      {/* <!-- Main Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <Link className="navbar-brand " to={"/"}>
          <img   src="/assets/images/logo-removebg-preview-.png" alt="Pureit Logo" style={{ height: "60px", width: "100px" }}   />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to={""} style={{ color: "#00254f", fontWeight: "500" }}>Home</Link>
            </li>

            <li
              className="nav-item dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link className="nav-link" to={"/"} style={{ color: "#00254f", fontWeight: "500" }}>
                Product
              </Link>

              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li
                    className="dropdown-item"
                    onMouseEnter={handleSubMenuMouseEnter}
                    onMouseLeave={handleSubMenuMouseLeave}
                  >
                    <a
                      to="/product/option1"
                      style={{ color: "#00254f", fontWeight: "500", textDecorationLine: "none" }}
                      className="d-flex justify-content-between align-items-center }"
                    >
                      Water Purifier
                      <i className="bi bi-chevron-right"></i> {/* Right arrow icon */}
                    </a>

                    {isSubMenuOpen && (
                      <ul className="dropdown-menu position-absolute start-100 top-0">
                        <li>
                          <Link
                            className="dropdown-item"
                            to={"Le01"}
                            style={{ color: "#00254f", fontWeight: "500" }}
                          >
                            LE01 Alkaline Water Purifier
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="dropdown-item"
                            to={"Aqua"}
                            style={{ color: "#00254f", fontWeight: "500" }}
                          >
                            Aqua Akshara
                          </Link>
                        </li>

                      </ul>
                    )}
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="Geyser"
                      style={{ color: "#00254f", fontWeight: "500" }}
                    >
                      Water Geyser
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="Industrial"
                      style={{ color: "#00254f", fontWeight: "500" }}
                    >
                      Industrial Product
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="Solar"
                      style={{ color: "#00254f", fontWeight: "500" }}
                    >
                      Solar Products
                    </Link>
                  </li>
                </ul>
              )}
            </li>





            <li className="nav-item">
              <Link className="nav-link" to={"Gallery"} style={{ color: "#00254f", fontWeight: "500" }}>Gallary</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"About "} style={{ color: "#00254f", fontWeight: "500" }}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"BookDemo"} style={{ color: "#00254f", fontWeight: "500" }}>Book Demo</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className="search-box me-3">
              <input type="text" placeholder="Type to search" className="form-control" />
              <i className="bi bi-search"></i>
            </div>

          </div>
        </div>
      </nav>




      <Outlet />


      {/* <!-- WhatsApp Button --> */}
      <div className="whatsapp-popup-button" data-bs-toggle="modal" data-bs-target="#whatsappModal">
        <i className="bi bi-whatsapp"></i>
      </div>

      {/* <!-- WhatsApp Modal --> */}
      <div className="modal fade" id="whatsappModal" tabindex="-1" aria-labelledby="whatsappModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="whatsappModalLabel">Chat with Veerachi International</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Click the button below to start a chat with Veerachi International on WhatsApp.</p>
              <a href="https://wa.me/+1234567890" className="btn btn-success w-100" target="_blank">
                <i className="bi bi-whatsapp"></i> Start Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer>
        <div className="container text-center">
          <h4 className=" fw-bold mb-4">Welcome! We're glad you're here. Take 5% OFF on your first purchase when you,
            <Link to={"/"}>join our email list.</Link>
          </h4>

          <hr />

          <div className="row ">
            <div className="col-md-3  col-sm-6 footer-section">
              <h5>Water Purifiers</h5>
              <ul className="list-unstyled footer-links">
                <li><Link to={"/"}>RO Water Purifier</Link></li>
                <li><Link to={"/"}>UV Water Purifier</Link></li>
                <li><Link to={"/"}>Eco Range Water Purifier</Link></li>
                <li><Link to={"/"}>Copper Range Water Purifier</Link></li>
                <li><Link to={"/"}>Just Launched</Link></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 footer-section">
              <h5>Services</h5>
              <ul className="list-unstyled footer-links">
                <li><Link to={"/"}>Service Support</Link></li>
                <li><Link to={"/"}>Register a Complaint</Link></li>
                <li><Link to={"/"}>Book Demo</Link></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 footer-section">
              <h5>Already Own a Pureit</h5>
              <ul className="list-unstyled footer-links">
                <li><Link to={"/"}>My Account</Link></li>
                <li><Link to={"/"}>Order a fresh Germ Kill Kit</Link></li>
                <li><Link to={"/"}>Register a Device</Link></li>
                <li><Link to={"/"}>My Orders</Link></li>
                <li><Link to={"/"}>Extended Warranty</Link></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 footer-section">
              <h5>About Us</h5>
              <ul className="list-unstyled footer-links">
                <li><Link to={"/"}>About Pureit</Link></li>
                <li><Link to={"/"}>Pureit Advertisements</Link></li>
                <li><Link to={"/"}>Contact Us</Link></li>
                <li><Link to={"/"}>Water and Health</Link></li>
              </ul>
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-md-4 col-sm-6">
              <p>&copy; Veerachi International Pureit 2025 all rights reserved.</p>
            </div>
            <div className="col-md-4 col-sm-6 text-end">
              <Link to={"/"}>Terms & Conditions</Link> |
              <Link to={"/"}>Privacy Notice</Link> |
              <Link to={"/"}>Site Map</Link>
            </div>
            <div className="col-md-4 col-sm-6 text-end">
              <ul className="list-inline">
                <li className="list-inline-item" ><Link to={"/"}><i class="bi bi-facebook" style={{ color: '#1877F2' }}></i></Link></li>
                <li className="list-inline-item"><Link to={"/"}><i class="bi bi-instagram" style={{ color: '#E4405F' }}></i></Link></li>
                <li className="list-inline-item"><Link to={"/"}><i class="bi bi-twitter" style={{ color: '#1DA1F2' }}></i></Link></li>
                <li className="list-inline-item"><Link to={"/"}><i class="bi bi-youtube" style={{ color: '#FF0000' }}></i></Link></li>
              </ul>
            </div>
          </div>

        </div>
      </footer>
    </div>
    //  Nav bar


  )
}
