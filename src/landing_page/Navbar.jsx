import React from 'react'
import { Link } from 'react-router-dom';
import zerodhalogo from '../assets/images/logo.svg'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg border-bottom sticky-top" style={{ backgroundColor: "#fff" }}>
                <div class="container-fluid p-2 justify-content-around ">
                    <Link class="navbar-brand" to="/">
                        <img src={zerodhalogo} style={{ width: "25%" }} alt="Zerodha Logo" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <form action="" className='d-flex ' role='search'>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/signup">Sign Up</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link active" to="/about">About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link active" to="/product">Product</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link active" to="/pricing">Pricing</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link active" to="/support">Support</Link>
                                </li>
                            </ul>
                        </div>
                    </form>

                </div>
            </nav>
        </>
    );
}

export default Navbar;