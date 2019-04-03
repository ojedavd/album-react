import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" className={this.props.classes.sombra}>
          <img src={logo} className="App-logo" alt="logo" />
          <Login />
        </header>
      </div>
    );
  }
}

export default withStyles({
  button:{
    backgroundColor:'red'
  },
  sombra:{
    boxShadow:'0px 0px 5px rgba(0,0,0,0.5)'
  }
})(App);
