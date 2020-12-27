import React, { Component } from 'react';
import './Navbar.css'
import {Link, withRouter} from "react-router-dom";

class Navbar extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }

    state = { clicked: false };
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Kviz</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li >      
                            <Link className="nav-links" to="/home"> Home</Link>         
                    </li>
                
                    {/* <li >      
                            <Link className="nav-links" to={"/create"}> CreateQuize</Link>         
                    </li> */}
                    <li >      
                           <Link className="nav-links" to="/addQ"> Contact Us</Link>         
                    </li>
                    <li >      
                            <Link className="nav-links" to="/register"> Sign up</Link>         
                    </li>
                    <li >      
                            <Link className="nav-links" to="/login"> Login</Link>         
                    </li>
                </ul>
               
            </nav>
        )
    }
}

export default withRouter(Navbar);