import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { addTodo } from '../store/action'

class App extends Component {
  handleSubmit(){
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      body: {
        username: 'tony',
        password: '1213'
      }
    })
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error)
    })
  }
  handleSetName(){
    this.props.dispatch(addTodo('tony1iiiis'))
  }
  render() {
    const { user_name } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {user_name}
        <button onClick={this.handleSetName.bind(this)}>click me</button>
      </div>
    );
  }
}

function select(state){
  return {
    user_name: state.todoApp.name
  }
}

export default connect(select)(App);
