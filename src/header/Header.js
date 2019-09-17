import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
//import logo from '../logo.svg';

class Header extends Component {
    render () {
        return (
            <div>
                <h1> React App </h1>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}

               {/*  <Router> */}
                    <div>
                        <li>
                            <Link to={'/'} >Home</Link>
                        </li>
                        <li>
                            <Link to={'users'} >User</Link>
                        </li>
                    </div>
                {/* </Router> */}
            </div>
        )
    }
}

export default Header;