import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
    render () {
        return (
            <div>
                <h1> React App </h1>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}

export default Header;