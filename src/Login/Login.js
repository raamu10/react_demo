import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';

import LoginService from './LoginService';

class Login extends Component {
    loginService = new LoginService();
    constructor (props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''

            }
        }
        
        this.updateVal = this.updateVal.bind(this);
        this.login = this.login.bind(this);
        console.log("log props:", props);
    }

    updateVal(e) {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({
            user: {
                ...this.state.user,
                [name]: val
            }
            
        });
    }

    login () {
        this.loginService.loginUser(this.state.user, function() {
            this.props.navProp.history.push('/users');
        }.bind(this));
    }

    
    render () {
        const {email, password} = this.state.user;
        return (
            
            <div>
                <Form>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control type="email" name="email"  placeholder="Enter Email" value={email} onChange={this.updateVal} />
                    </Form.Group>
                    <Form.Group controlId="formPwd">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter Password" value={password} onChange={this.updateVal}/>
                    </Form.Group>
                    <Button variant="primary" onClick={this.login}>
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Login;