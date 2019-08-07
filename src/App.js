import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';

//import Header from './header/Header';
import Home from './home/Home';
import Login from './Login/Login';

//Todo
//import Todo from './todo/Todo';


class App extends Component {
  render() {
    return (
      <div>
            {/* imported from Header.js */}
            {/* <Header />  */}
            {/* <Content /> */}

            {/* <Todo /> */}
            <Login />
      </div>
    );
  }
}

class Content extends Component {

    constructor (props) {
        super(props);
        this.state = {
            title : '',

            todoList: [
                {
                    id: 1,
                    title: 'List01',
                    content: 'items1, items2, items3'
                }, {
                    id: 2,
                    title: 'List02',
                    content: 'ooops'
                }
            ]
        };
        this.updateVal = this.updateVal.bind(this);
        this.clearVal = this.clearVal.bind(this);
    }

    updateVal (e) {
        this.setState({
               title: e.target.value,
        });
    }

    clearVal () {
        this.setState({
            title:'',
        });

        ReactDOM.findDOMNode(this.refs.titleTxt).focus();
    }

    alertTodoTitle (titleTxt) {
        alert(titleTxt + " Todo!!");
    }

    render () {
        return (
            <div>
                <h2> Todo App!! </h2>
                <input type="text" value={this.state.title} 
                    onChange={this.updateVal} ref="titleTxt" />
                <br/>
                {this.state.title}
                <br/>
                <button onClick={this.clearVal}> Clear Text </button>

                <br/>

                <div>
                    {
                        this.state.todoList.map((todo) => {
                            return(
                                <TodoCotent title={todo.title} content={todo.content} key={todo.id} alertTitle={this.alertTodoTitle.bind(this, todo.title)} />
                            ); 
                        })
                    }
                </div>

                <hr/>

                
                <Router>
                    <div>
                        <li>
                            <Link to={'/'} >Home</Link>
                        </li>
                        <li>
                            <Link to={'/login'} >Login</Link>
                        </li>
                    </div>
                    <hr/>
                    
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/login' component={Login}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

const TodoCotent = ({title, content, alertTitle}) => {
    return(
        <div>
            <p>{title}-{content}</p> 
            <button onClick={alertTitle}>Click Here!</button>
        </div>  
    ); 
}

export default App;
