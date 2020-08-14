import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ChatBubble from 'react-chat-bubble';

export default class Chat extends Component {
    state = {
        messages: [{
            "type" : 0,
            "image": "emilyH.jpg",
            "text": "you said: a horse-sized duck"
        }, {
            "type": 1,
            "image": "johnG.jpg",
            "text": "(username) said: one hundred duck-sized horses"
        },
        {
            "type" : 0,
            "image": "emilyH.jpg",
            "text": "are you kidding?"
        },
        {
            "type" : 1,
            "image": "johnG.jpg",
            "text": "hahaha I think I'm in love w u"
        },
        {
            "type" : 0,
            "image": "emilyH.jpg",
            "text": "rage quitting.. bye </3"
        }],
    }

    handleNewMessage = () => {
        console.log("new message!");
    }

    render() {
        return (
        <div className="chat-container">
            <div className="chat-header">
                <p>chat with (username)</p>
                <Link to="/dash"><p>abandon chat</p></Link>
            </div>
            <div className="message-container">
                <ChatBubble messages = {this.state.messages} onNewMessage={this.handleNewMessage}/>
            </div>
            <div className="send-text">
                <button onClick={() => this.handleNewMessage()}>send</button>
            </div>
        </div>
        );
    }
}