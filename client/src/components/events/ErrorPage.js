import React, {Component} from 'react';
import { Link } from "react-router-dom"
import Navbar from '../layout/Navbar';


class ErrorPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                Please Login or Register to attend events!
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/loginprivilege" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
            </div>
            
            
        );
    }
}

export default ErrorPage ;