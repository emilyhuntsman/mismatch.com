import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
        <footer className="footer">
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