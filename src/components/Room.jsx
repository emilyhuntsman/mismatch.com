import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { auth } from "../services/firebase";
import { db } from "../services/firebase"
//import ChatBubble from 'react-chat-bubble';
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
        db.ref("chats").on("value", snapshot => {
            let chats = [];
            let messages = [];
            snapshot.forEach((snap) => {
                let cont = snap.val()["content"];
                let author = snap.val()["author"];
                let message = {};
                message["image"] = "./johnG.jpg";
                message["text"] = cont;
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
        await db.ref("chats").push({
            content: this.state.content,
            author: this.state.username,
            timestamp: Date.now(),
            uid: this.state.user.uid
        });
        this.setState({ content: '' })
    }

    render() {
        return (
        <div>
            <div id="abandon">
                <Link to="/dash"><button>abandon chat</button></Link>
            </div>
            <div className="chat-window">
                {/* <div className="chats">
                    {this.state.chats.map(chat => {
                    return <p key={chat.timestamp}>{chat.author}: {chat.content}</p>
                    })}
                </div> */}
                <ChatBubble messages = {this.state.messages} />
                <form onSubmit={this.handleSend}>
                    <input onChange={this.handleChange} value={this.state.content}></input>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
        );
    }
}