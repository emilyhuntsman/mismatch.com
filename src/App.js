import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Room from "./components/Room";

class App extends Component {
  state = {
    token: "",
    username: "",
    email: "",
    authenticated: false,
  };

  saveLogin = (username, email, token) => {
    this.setState({
      token: token,
      username: username,
      email: email,
      authenticated: true,
    })
  }

  resetLogin = () => {
    this.setState({
      token: "",
      username: "",
      email: "",
      authenticated: false,
    })
  }

  render() {
    return (
      <div className="App flex-center">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" render={() => (
              <Auth saveLogin={(username,token) => this.saveLogin(username,token)}/>
            )}
            />
            <Route
              exact path="/about/" render={() => (
                <About />
              )}
            />
            <Route
              exact path="/dash/" render={() => (
                <Dashboard />
              )}
            />
            <Route
              exact path="/chat/" render={() => (
                <Room token={this.state.token} username={this.state.username} email={this.state.email}/>
              )}
            />
          </Switch>
          <Footer username={this.state.username} resetLogin={this.resetLogin}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
