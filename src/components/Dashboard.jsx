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
            {q: "Would you rather have to", a: "Always swallow your food whole", b: "Never eat anything solid again"},
            {q: "Would you rather", a: "Not be able to hear anything", b: "Have every sound be unbearably loud"},
            {q: "Would you rather save", a: "Your three closest family members", b: "One thousand strangers"},
        ],
        cardURL: "http://localhost:8000/cards/",
        cards: null
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

    handleNext = () => {
        const cardDivs = document.getElementsByClassName("card")
        for (let i=0; i < cardDivs.length; i++){
            console.log(i+1,":")
            cardDivs[i].id = (parseInt(cardDivs[i].id)%8)+1
            console.log(cardDivs[i])
        }
    }

    componentDidMount = () => {
        this.getCards();
    }

    render() {
        console.log("cards: ",this.state.cards)
        return (
        <div className="card-container flex-center-row">
            <div id="1" className="card">
                <Card question={this.state.questions[0]} handleNext={() => this.handleNext()} />
            </div>
            <div id="2" className="card">
                <Card question={this.state.questions[1]} handleNext={() => this.handleNext()} />
            </div>
            <div id="3" className="card">
                <Card question={this.state.questions[2]} handleNext={() => this.handleNext()} />
            </div>
            <div id="4" className="card">
                <Card question={this.state.questions[3]} handleNext={() => this.handleNext()} />
            </div>
            <div id="5" className="card">
                <Card question={this.state.questions[4]} handleNext={() => this.handleNext()} />
            </div>
            <div id="6" className="card">
                <Card question={this.state.questions[5]} handleNext={() => this.handleNext()} />
            </div>
            <div id="7" className="card">
                <Card question={this.state.questions[6]} handleNext={() => this.handleNext()} />
            </div>
            <div id="8" className="card">
                <Card question={this.state.questions[7]} handleNext={() => this.handleNext()} />
            </div>
        </div>
        );
    }
}