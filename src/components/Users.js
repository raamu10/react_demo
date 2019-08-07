import React, {Component} from 'react';
import axios from 'axios';

//import UserTable from './UserTable';

import Table from 'react-bootstrap/Table'

import {Modal, Button, ButtonToolbar} from 'react-bootstrap';

const BASE_URL = 'https://reqres.in/';

class Users extends Component {
    showModal = false;
    constructor(props) {
        super (props)

        this.state = {
            userList: [],
            isModelShow: false,
            selectedUser: {},
            isViewUser: false
        };

        this.getUserList = this.getUserList.bind(this);
        this.viewOrEdit = this.viewOrEdit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    getUserList () {
        let url = BASE_URL + 'api/users?page=2'
        axios.get(url).then(response => {
            this.setState({
                userList: response.data.data
            });
        }).catch(error => {
            console.log(error);
        });
    }

    viewOrEdit(user, isToView) {
        this.setState({
            selectedUser: user,
            isModelShow: true,
            isViewUser: isToView
        });
    }

    componentDidMount() {
        this.getUserList();   
    }

    closeModal() {
        this.setState({
            selectedUser: {},
            isModelShow: false
        });
    }


    /**
     * Render the the template view or edit content using if else condition
     */
    renderViewOrEditUser ( ) {
        if (this.state.isViewUser) { 
            return (
            <React.Fragment>
                <p>
                    <label>First Name: </label> {this.state.selectedUser.first_name}
                </p>
                <p>
                    <label>Last Name: </label> {this.state.selectedUser.last_name}
                </p>
                <p>
                    <label>Email: </label> {this.state.selectedUser.email}
                </p>
            </React.Fragment>
            );
            
        } else { 

            return (
            <React.Fragment>
                <p>
                    <label>First Name: </label> <input type="text" name="firstName" 
                        value={this.state.selectedUser.first_name} readOnly/>
                </p>
                <p>
                    <label>Last Name: </label> <input type="text" name="lastName" 
                        value={this.state.selectedUser.last_name} readOnly/>
                </p>
                <p>
                    <label>Email: </label> <input type="email" name="enmail" 
                        value={this.state.selectedUser.email} readOnly/>
                </p>
            </React.Fragment>
            );
        }
    }


    render () {
        const userList = this.state.userList;

        return (
            <div>
                <p>Users List</p>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            userList.map(user => {
                                return (
                                    <React.Fragment key={user.id}>
                                        {/* <UserTable userData={user}/> */}

                                        <tr>
                                            <td>
                                                <span> {user.id} </span>
                                            </td>
                                            <td>
                                                <span> {user.first_name} </span>
                                            </td>
                                            <td> 
                                                <span> {user.last_name} </span>
                                            </td>
                                            <td> 
                                                <span> {user.email} </span>
                                            </td>
                                            <td> 
                                                <ButtonToolbar>
                                                    <Button variant="secondary" onClick={() => {this.viewOrEdit(user, true)}}>
                                                        View
                                                    </Button>
                                                    <Button variant="secondary" onClick={() => {this.viewOrEdit(user, false)}} style={{marginLeft:'10px'}}>
                                                        Edit
                                                    </Button>
                                                </ButtonToolbar>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                    
                                );
                            })
                        }
                    </tbody>
                </Table>

                {/* Modal */}
                <Modal show={this.state.isModelShow} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>User Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            { 
                                this.renderViewOrEditUser()
                            
                            }
                        </div>
                        
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.closeModal}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }


}

export default Users;