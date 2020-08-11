import React, { Component } from "react";
import Card from "./Card"
import { CSSTransitionGroup } from 'react-transition-group'

export default class Dashboard extends Component {
    render() {
        return (
        <div className="card-container flex-center-row">
            <Card />
            <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <h1>Fading at Initial Mount</h1>
            </CSSTransitionGroup>
        </div>
        );
    }
}