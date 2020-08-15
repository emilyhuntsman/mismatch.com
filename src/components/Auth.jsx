import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

export default class Auth extends Component {
    state = {
        username: "",
        password: "",
        baseURL: "http://localhost:8000/",
        token: "",
        goHome: false,
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    login = () => {
        fetch(this.state.baseURL + "user/login/", {
            method: "POST",
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            if (res.status !== 401) {
                this.props.saveLogin(this.state.username,this.state.token);
                return res.json()
            }
            throw new Error("invalid login info");
        })
        .then((responsejson) => { 
            this.setState({
            token: responsejson.token,
            username: "",
            password: "", })
            localStorage.setItem('token', responsejson.token);
        })
        .catch((error) => console.error({ Error: error }));
    }

    signUp = () => {
        fetch(this.state.baseURL + "user/signup/", {
            method: "POST",
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(() => {
            this.login();
        })
        .catch((error) => console.error({ Error: error }));
    }

    doRedirect = () => {
        if (this.state.token !== "") {
        return <Redirect to="/dash"/>
        }
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
                    <button onClick={() => this.login()}>log in</button>
                    <button onClick={() => this.signUp()}>sign up</button>
                </div>
            </div>
        </div>
        );
    }
}