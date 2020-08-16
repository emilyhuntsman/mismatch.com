import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { auth } from "../services/firebase";

export default class Auth extends Component {
    state = {
        username: "",
        password: "",
        email: "",
        baseURL: "http://localhost:8000/",
        token: "",
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
            auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            if (res.status !== 401) {
                this.props.saveLogin(this.state.username,this.state.email,this.state.token);
                return res.json()
            }
            throw new Error("invalid login info");
        })
        .then((responsejson) => { 
            this.setState({
            token: responsejson.token,
            username: "",
            password: "",
            email: "" })
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
            return (auth().createUserWithEmailAndPassword(this.state.email, this.state.password));
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
                <label htmlFor="email" className="su">email  </label>
                <input
                    type="text"
                    id="email"
                    className="su"
                    value={this.state.email}
                    onChange={this.handleChange}
                    ref={(node) => (this.email = node)}
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