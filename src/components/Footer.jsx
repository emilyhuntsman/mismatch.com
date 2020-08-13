import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Footer extends Component {
    state = {
        username: this.props.username
    }

    handleLogout = () => {
        this.props.resetLogin();
        this.setState({ username: "" })
    }

    doRedirect = () => {
        // need to get this working.. can't log out properly
        if (this.state.username === "") {
            console.log("inside")
            return <Redirect to="/"/>
        }
    }

    render() {
        return (
        <footer className="footer">
            {this.doRedirect()}
            { this.props.username !== "" &&
            <div id="logout-div">
                <button onClick={() => this.handleLogout()}>log out</button>
            </div> }
            <div className="flex-center-row footer-menu">
                <a href="/"><p>home</p></a>
                <p>|</p>
                <a href="/about/"><p>about</p></a>
                <p>|</p>
                <a href="https://github.com/root2point0/mismatch.com"><p>code</p></a>
            </div>
        </footer>
        );
    }
}