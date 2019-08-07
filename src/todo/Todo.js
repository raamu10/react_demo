import React, {Component} from 'react';

class Todo extends Component {
    constructor (props) {
        super (props);

        this.state = {
            user: {
                name: '',
                job: ''
            }
        };

        this.setVal = this.setVal.bind(this);
        this.addNewUser = this.addNewUser.bind(this);
    }
    
    //Set input val
    setVal (e) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            user: {
                ...this.state.user,
                [name]:value
            }
        });
    }

    addNewUser () {
        console.log("--AddNew User:", this.state.user);
    };

    render () {
        return (
            <div>
                <div><p>Todo App</p></div>
                <div><p>Add User</p></div>

                <br/>
                <div>
                    <div>
                        <label> Name:</label>
                        <input type="text" name="name" value={this.state.user.name} onChange={this.setVal}/>
                        
                    </div>
                    <div>
                        <label> Job:</label>
                        <input type="text" name="job" value={this.state.user.job} onChange={this.setVal}/> 
                    </div>
                    <div>
                        <button name="addUser" onClick={this.addNewUser}>Add</button>
                    </div>

                    <Users />

                </div>
            </div>
        );
    }
}

class Users extends Component {
    constructor (props) {
        super(props);

        this.getAllUsers = this.getAllUsers.bind(this);
        this.getAllUsers();
    }

    getAllUsers () {
    }


    render() {
        return (
         <div>

         </div>   
        )
    }
}

export default Todo;