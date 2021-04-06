import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Boiwala</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse mx-auto" id="navbarNavAltMarkup">
                        <div class="navbar-nav mx-auto">
                            <Link to="/home"><a class="nav-link active" href="#">Home</a></Link>
                            <a class="nav-link active" href="#">Orders</a>
                            <Link to="/admin"><a class="nav-link active" href="#">Admin</a></Link>
                           <Link to="/login"> <a class="nav-link" href="#"><button class="btn btn-primary">LogIn</button></a></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;