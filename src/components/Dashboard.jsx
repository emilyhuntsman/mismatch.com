import React, { Component } from "react";
import Card from "./Card"

export default class Dashboard extends Component {
    render() {
        return (
        <div className="card-container">
            <ul id="card-carousel">
                <li id="c1">
                    <Card />
                </li>
                <li id="c2">
                    <Card />
                </li>
                <li id="c3">
                    <Card />
                </li>
                <li id="c4">
                    <Card />
                </li>
                <li id="c5">
                    <Card />
                </li>
            </ul>
        </div>
        );
    }
}