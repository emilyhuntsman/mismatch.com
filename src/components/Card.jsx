import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Card extends Component {
    
    state = {}

    test = () => {
        this.props.handleNext();
        this.setState({})
    }
    render() {
        return (
        <div className="card-div">
            <h4>{this.props.question.q}</h4>
        <p>A. {this.props.question.a}</p>
            <p>or</p>
        <p>B. {this.props.question.b}</p>
            <div className="card-buttons">
                <Link to="/chat"><button>A</button></Link>
                <Link to="/chat"><button>B</button></Link>
            </div>
            <button className="next"><p id="skip" onClick={() => this.test()}>skip question  </p>&#8250;</button>
        </div>
        );
    }
}