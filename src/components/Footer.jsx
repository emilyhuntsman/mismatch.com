import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {

    render() {
        return (
        <>
            <footer className="footer">
                <div className="flex-center-row footer-menu">
                    <Link to="/"><p>home</p></Link>
                    <p>|</p>
                    <Link to="/about/"><p>about</p></Link>
                    <p>|</p>
                    <a href="https://github.com/root2point0/mismatch.com">code</a>
                </div>
            </footer>
        </>
        );
    }
}