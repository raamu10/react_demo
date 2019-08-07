//import React, {Component} from 'react';

import axios from 'axios';

const BASE_URL = 'https://reqres.in/';

class LoginService {

    

    constructor() {

        this.loginUser = this.loginUser.bind(this);
    }

    //Login User
    loginUser (user) {
        console.log("LoginService:", user);
        let url = BASE_URL + 'api/login';
        axios.post(url, user).then(response => {
            console.log(response)
            alert("Logged In successfully!!");
        }).catch(error => {
            console.log("error", error);
            alert("User Not found");
        });
    }


}

export default LoginService