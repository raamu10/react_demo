import React, {Component} from 'react';
import {Button} from 'react-bootstrap'


class UserTable extends Component {
    constructor(props) {
        super (props)
        console.log(props.userData);
        this.state = {
            userData: props.userData
        }

        this.editUser = this.editUser.bind(this);
    }

    editUser(user) {
        console.log("Edit User:", user);
    }

    render() {
        const user = this.state.userData;
        return (
            <React.Fragment key={user.id}>
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
                        <Button variant="secondary" onClick={() => {this.editUser(user)}}>
                            Edit
                        </Button>
                    </td>
                </tr>
            </React.Fragment>
        )
    }
}

export default UserTable;