import React, { Component } from "react";
import Card from "./Card"

export default class Dashboard extends Component {

    state = {
        searchURL: "http://localhost:8000/cards/",
        cards: []
    }

    getCards = () => {
        fetch(this.state.searchURL)
        .then(response => {
            return response.json()
        }).then(json => this.setState({
            cards: json
        }),
        error => console.log(error))
    }

    componentDidMount = () => {
        this.getCards();
    }

    render() {
        return (
        <div className="card-container flex-center-row">
            <div id="c1">
                <Card question={this.state.cards[0]} />
            </div>
            <div id="c2">
                <Card question={this.state.cards[1]} />
            </div>
            <div className="active" id="c3">
                <Card question={this.state.cards[2]} />
            </div>
            <div id="c4">
                <Card question={this.state.cards[3]} />
            </div>
            <div id="c5">
                <Card question={this.state.cards[4]} />
            </div>
        </div>
        );
    }
}