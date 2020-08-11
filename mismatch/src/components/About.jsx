import React, { Component } from 'react';
import John from "./johnG.jpg";
import Emily from "./emilyH.jpg";
import Plus from "./plus.png";

export default class About extends Component {
    render() {
        return (
            <div className="about-container flex-center">
                <div className="about-text">
                    <p>Ever heard the phrase "opposites attract"?</p>
                    <p>Well we have, and we're firm believers! Relationships without conflict are just boring. The proof is in the pudding, read testimonials from one successful mismatch below!</p>
                </div>
                <div className="member-pics flex-center-row">
                    <img src={John} alt="member1" />
                    <img src={Plus} alt="plus" id="plus"/>
                    <img src={Emily} alt="member2" />
                </div>
                <div className="about-text">
                    <p className="testimonial">Thanks to mismatch.com we're coming up on our 3rd year of marriage! Do we fight? Sure. Are we divorced yet? No. That seems like a win to me!</p>
                    <p className="signature"> - John G.</p>
                    <p className="testimonial">Shut up John.</p>
                    <p className="signature"> - Emily H.</p>
                </div>
            </div>
        )
    }
}