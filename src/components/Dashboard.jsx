import React, { Component } from "react";
import Card from "./Card"

export default class Dashboard extends Component {

    state = {
        questions: [
            {q: "Would you rather fight", a: "One horse-sized duck", b: "One hundred duck-sized horses"},
            {q: "Would you rather always wear", a: "A helmet", b: "Snowshoes"},
            {q: "Would you rather spend the rest of your life ", a: "On a sailboat", b: "In an RV"},
            {q: "Would you rather be allergic to", a: "Dairy", b: "Gluten"},
            {q: "Would you rather be", a: "An average person in the present", b: "A king of a country 2500 years ago"},
        ],
        cardURL: "http://localhost:8000/cards/",
        cards: []
    }

    getCards = () => {
        fetch(this.state.cardURL)
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
        console.log("cards: ",this.state.cards)
        return (
        <div className="card-container flex-center-row">
            <div id="c1">
                <Card question={this.state.questions[0]} />
            </div>
            <div id="c2">
                <Card question={this.state.questions[1]} />
            </div>
            <div className="active" id="c3">
                <Card question={this.state.questions[2]} />
            </div>
            <div id="c4">
                <Card question={this.state.questions[3]} />
            </div>
            <div id="c5">
                <Card question={this.state.questions[4]} />
            </div>
        </div>
        );
    }
}