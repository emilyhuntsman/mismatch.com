import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import { auth } from "../services/firebase";
import { db } from "../services/firebase"
import ChatBubble from "./ChatBubble"

export default class Room extends Component {
    state = {
        user: auth().currentUser,
        username: this.props.username,
        chats: [],
        content: '',
        messages: []
    };

    componentDidMount = () => {
        db.ref(this.props.topic).on("value", snapshot => {
            let chats = [];
            let messages = [];
            snapshot.forEach((snap) => {
                let cont = snap.val()["content"];
                let author = snap.val()["author"];
                let message = {};
                message["image"] = "./johnG.jpg";
                message["text"] = cont;
                message["author"] = author;
                (author === this.props.username) ? message["type"] = 0 : message["type"] = 1;
                chats.push(snap.val());
                messages.push(message);
            });
            this.setState({ chats, messages });
        });

    }

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        });
    }

    handleSend = async (event) => {
        event.preventDefault();
        await db.ref(this.props.topic).push({
            content: this.state.content,
            author: this.state.username,
            timestamp: Date.now(),
            uid: this.state.user.uid
        });
        this.setState({ content: '' })
    }

    removeData = () => {
        db.ref(this.props.topic).remove();
    }

    doRedirect = () => {
        if (this.props.topic === "") {
        return <Redirect to="/"/>
        }
    }

    render() {
        return (
        <div className="flex-center">
            {this.doRedirect()}
            <div id="abandon-header" className="flex-center-row">
                <div id="topic-name">
                    <h3>{this.props.topic}</h3>
                </div>
                <div id="abandon-button">
                    <Link to="/dash" onClick={() => this.removeData()}><button>abandon chat</button></Link>
                </div>
            </div>
            <div className="chat-window flex-center">
                <ChatBubble messages = {this.state.messages} />
                <form onSubmit={this.handleSend}>
                    <input className="message-input"onChange={this.handleChange} value={this.state.content}></input>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
        );
    }
}