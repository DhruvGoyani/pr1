import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Header(props) {
    return (
        <header>
            <div className="header-top-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <ul className="top-bar-info list-inline-item pl-0 mb-0">
                                <li className="list-inline-item"><a href="mailto:support@gmail.com"><i className="icofont-support-faq mr-2" />support@novena.com</a></li>
                                <li className="list-inline-item"><i className="icofont-location-pin mr-2" />Address Ta-134/A, New York, USA </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                                <a href="tel:+23-345-67890">
                                    <span>Call Now : </span>
                                    <span className="h4">823-4565-13456</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navigation" id="navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img src="images/logo.png" alt className="img-fluid" />
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icofont-navigation-menu" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarmain">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink to={"/home"} className="nav-link">Home</NavLink> 
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/about"} className="nav-link">About</NavLink>
                                </li>
                            <li className="nav-item">
                                <NavLink to={"/services"} className="nav-link">Services</NavLink>
                              </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="department.html" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Department<i className="icofont-thin-down" /></a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                                    <li>
                                        <NavLink to={"/department"} className="dropdown-item" >Department</NavLink>
                                        </li>
                                    <li>
                                        <NavLink to={"/departmentsingle"} className="dropdown-item">Department single</NavLink>
                                        </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="doctor.html" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Doctors <i className="icofont-thin-down" /></a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                    <li>
                                        {/* <a className="dropdown-item" href="doctor.html">Doctors</a> */}
                                        <NavLink to={"doctors"} className="dropdown-item" >Doctors</NavLink> 
                                        </li>
                                    <li>
                                        {/* <a className="dropdown-item" href="doctor-single.html">Doctor Single</a> */}
                                        <NavLink to={"/doctorsingle"} className="dropdown-item">Doctors Single</NavLink>
                                    </li>
                                    <li>
                                        {/* <a className="dropdown-item" href="appoinment.html">Appoinment</a> */}
                                        <NavLink to={"/appointment"} className="dropdown-item">Appoinment</NavLink> 
                                        </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="blog-sidebar.html" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i className="icofont-thin-down" /></a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown05">
                                    <li>
                                        <NavLink to={"/blogslidebar"} className="dropdown-item">Blog with Sidebar</NavLink>
                                        </li>
                                    <li>
                                        <NavLink to={"/blogsingle"} className="dropdown-item">Blog Single</NavLink>
                                        </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/contact"} className="nav-link" >Contact</NavLink>
                                </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Header;