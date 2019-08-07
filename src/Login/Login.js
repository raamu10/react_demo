import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';

import Users from '../components/Users';
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
        console.log("-- state val:", this.state.user);
        this.loginService.loginUser(this.state.user);
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
                <Users />
            </div>
        );
    }
}

export default Login;