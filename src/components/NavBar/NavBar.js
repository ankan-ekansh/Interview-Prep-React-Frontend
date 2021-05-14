import React, { Component } from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark sticky-top navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand-xs">
                <Link className="navbar-brand me-auto" to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" width="30" height="30" className="d-inline-block align-top mr-2" alt="" />
                    Interview-Prep
                </Link>
                <ul className="nav navbar-nav navbar-dark me-2 mb-0 mb-lg-0 ml-auto">
                    <li class="nav-item"><a href="google.com" className="nav-link">Sign Up</a></li>
                    <li class="nav-item"><a href="google.com" className="nav-link">Login</a></li>
                </ul>
            </nav>  
        )
    }
}

export default NavBar;