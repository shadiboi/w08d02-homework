import React, {Component} from 'react';
import logo from './logo.svg';
import LoginForm from './LoginForm/LoginForm';
import MainPage from './NewsContainer/NewsContainer'
//import SearchNews from './SearchNews/SearchNews'

import './App.css';

class App extends Component  {
  constructor(){
    super()
    this.state = {
      loggenIn: false,
      username: null
    }
  }
  handleLogin = (formData) => {
    this.setState({
      loggedIn: true,
      username: formData.username
      })
  }
  render () {
    return (
     <div className="App">
      <h1> Welcome to News Main Page</h1>
      {
          this.state.loggedIn === true?
          <MainPage> </MainPage>
          //<SearchNews></SearchNews>
        :
          <LoginForm handleLogin = {this.handleLogin} ></LoginForm>
      }   
    </div>
    )
  }
}

export default App;
