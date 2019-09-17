import React, {Component} from 'react';

import {Button} from 'react-bootstrap';

import Login from '../Login/Login';

class Home extends Component {

    constructor (props) {
        super(props);
        this.state= {
            isLoginTab: true
        };

        this.loginOrReg = this.loginOrReg.bind(this);
        this.renderLoginOrRegisterComp = this.renderLoginOrRegisterComp.bind(this);

    }

    loginOrReg (isToLogin) {
        this.setState({
            isLoginTab: isToLogin
        });
    }

    renderLoginOrRegisterComp () {
        if (this.state.isLoginTab) {
            return (
                
                <Login navProp={this.props} />
            );
        } else {
            return (
                <div> Register div </div>
            );
        }
    }
    
    render () {
        return (
            <div>
                <div>
                    <p> Home!! </p>
                </div>
                <div>                
                    <div style={{float: 'right'}}>
                        <Button variant="primary" onClick={() => {this.loginOrReg(true)}} style={{marginRight: '10px'}}>
                            Login
                        </Button>
                        <Button variant="primary" onClick={() => {this.loginOrReg(false)}}>
                            Register
                        </Button>
                    </div>
                </div>


                <div style={{marginTop: '40px'}}>
                    <div style={{width: '50%'}}>
                        {
                            this.renderLoginOrRegisterComp()
                        }
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Home;