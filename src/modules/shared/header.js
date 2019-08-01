import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/home" style={{ color: 'White' }}>Wuilt Task</Link>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/index">Users</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>


    )
}

export default Header;

