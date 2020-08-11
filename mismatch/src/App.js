import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
// import Fight from "./components/Fight";
// import Chat from "./components/Chat";

class App extends Component {
  state = {
    auth: false,
    user: null,
    username: '',
    password: '',
    users: [],
    currentPage: "/",
    baseURL: ""
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" render={() => (
              <Auth />
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
            {/* <Route
              exact path="/chat/" render={() => (
                <Chat />
              )}
            /> */}
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
