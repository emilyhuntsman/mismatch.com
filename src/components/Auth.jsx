import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

export default class Auth extends Component {
    state = {
        username: "",
        password: "",
        goHome: false,
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    // handleSubmit = (event) => {
    //     this.props.handleSubmit(event, this.state.username, this.state.password);
    //     this.setState({
    //         username: "",
    //         password: "",
    //         goHome: true,
    //     });
    // };

    doRedirect = () => {
        if (this.state.goHome) {
        return <Redirect to="/"/>
        }
    }

    testing = () => {
        this.setState({ goHome: true }); 
    }



    render() {
        return (
        <div className="flex-center">
            <div className="login-signup-container flex-center">
                {this.doRedirect()}
                <h1>account information</h1>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                <label htmlFor="username" className="su">display name  </label>
                <input
                    type="text"
                    id="username"
                    className="su"
                    value={this.state.username}
                    onChange={this.handleChange}
                    ref={(node) => (this.username = node)}
                />
                <br /><br />
                <label htmlFor="password" className="su">password  </label>
                <input
                    type="password"
                    id="password"
                    className="su"
                    value={this.state.password}
                    onChange={this.handleChange}
                    ref={(node) => (this.password = node)}
                />
                <br /><br />
                </form>
                <div className="button-div">
                    <button onClick={() => this.testing()}>log in</button>
                    <button onClick={() => this.testing()}>sign up</button>
                </div>
            </div>
        </div>
        );
    }
}