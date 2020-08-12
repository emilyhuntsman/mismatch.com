import React, { Component } from "react";
import Logo from "./logo.png";

export default class Header extends Component {
    render() {
        return (
        <header className="header">
            <div className="header-div">
                <a href='/'><img className="logo" src={Logo} alt="Logo" /></a>
            </div>
        </header>
        );
    }
}