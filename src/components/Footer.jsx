import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

export default class Footer extends Component {

    render() {
        return (
        <>
            {(this.props.username === "") ? <Redirect to="/"/> : null}
            <footer className="footer">
                { this.props.username !== "" &&
                <div id="logout-div">
                    <button onClick={() => this.props.resetLogin()}>log out</button>
                </div> }
                <div className="flex-center-row footer-menu">
                    <Link to="/"><p>home</p></Link>
                    <p>|</p>
                    <Link to="/about/"><p>about</p></Link>
                    <p>|</p>
                    <Link to="https://github.com/root2point0/mismatch.com"><p>code</p></Link>
                </div>
            </footer>
        </>
        );
    }
}