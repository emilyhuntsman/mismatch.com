import React, { Component } from "react";
import Card from "./Card"

export default class Dashboard extends Component {

    state = {
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
            cardDivs[i].id = (parseInt(cardDivs[i].id)%8)+1
        }
    }

    componentDidMount = () => {
        this.getCards();
    }

    render() {
        return (
        <div className="card-container flex-center-row">
            {(this.state.cards) ?
            <>
                <div id="1" className="card">
                    <Card question={this.state.cards[0]} handleNext={() => this.handleNext()} setTopic={(topic) => this.props.setTopic(topic)} />
                </div>
                <div id="2" className="card">
                    <Card question={this.state.cards[1]} handleNext={() => this.handleNext()} setTopic={(topic) => this.props.setTopic(topic)} />
                </div>
                <div id="3" className="card">
                    <Card question={this.state.cards[2]} handleNext={() => this.handleNext()} setTopic={(topic) => this.props.setTopic(topic)} />
                </div>
                <div id="4" className="card">
                    <Card question={this.state.cards[3]} handleNext={() => this.handleNext()} setTopic={(topic) => this.props.setTopic(topic)} />
                </div>
                <div id="5" className="card">
                    <Card question={this.state.cards[4]} handleNext={() => this.handleNext()} setTopic={(topic) => this.props.setTopic(topic)} />
                </div>
                <div id="6" className="card">
                    <Card question={this.state.cards[5]} handleNext={() => this.handleNext()} setTopic={(topic) => this.props.setTopic(topic)} />
                </div>
                <div id="7" className="card">
                    <Card question={this.state.cards[6]} handleNext={() => this.handleNext()} setTopic={(topic) => this.props.setTopic(topic)} />
                </div>
                <div id="8" className="card">
                    <Card question={this.state.cards[7]} handleNext={() => this.handleNext()} setTopic={(topic) => this.props.setTopic(topic)} />
                </div>
            </>
            : "" }
        </div>
        );
    }
}