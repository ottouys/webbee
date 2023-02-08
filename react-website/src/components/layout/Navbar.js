import React, { useEffect } from 'react';
import logo from "../../assets/images/logo-black.png";

import M from 'materialize-css/dist/js/materialize.min.js';

export const Navbar = () => {

    useEffect(() => {
        let sidenav = document.querySelector("#mobile-menu");
        M.Sidenav.init(sidenav, {});
    }, [])

    return (
        <div className="container">
            <nav>
                <div className="nav-wrapper">
                <div href="#!" className="brand-logo"><img src={logo} /> <h1 className="title">Web Bee</h1></div>
                <a href="#" data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#about">About</a></li>
                    <li><a href="#whyus">Why Choose Us</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-menu">
                <li><a href="#about">About</a></li>
                <li><a href="#whyus">Why Choose Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </div>        
    )
}
