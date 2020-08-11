import React, { Component } from "react";

export default class Card extends Component {
    render() {
        return (
        <div className="card-div">
            <h4>Would you rather fight...</h4>
            <p>A. One horse-sized duck</p>
            <p>or</p>
            <p>B. One hundred duck-sized horses</p>
            <div className="card-buttons">
                <button>A</button>
                <button>B</button>
            </div>
            <button className="next"><p id="skip">skip question  </p>&#8250;</button>
        </div>
        );
    }
}