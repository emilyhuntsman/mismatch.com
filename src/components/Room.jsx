import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { auth } from "../services/firebase";
import { db } from "../services/firebase"

export default class Room extends Component {
    state = {
        user: auth().currentUser,
        username: this.props.username,
        chats: [],
        content: '',
    };

    componentDidMount = () => {
        db.ref("chats").on("value", snapshot => {
            let chats = [];
            snapshot.forEach((snap) => {
                chats.push(snap.val());
            });
            this.setState({ chats });
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
            <div class="chat-window">
                <div className="chats">
                    {this.state.chats.map(chat => {
                    return <p key={chat.timestamp}>{chat.author}: {chat.content}</p>
                    })}
                </div>
                <form onSubmit={this.handleSend}>
                    <input onChange={this.handleChange} value={this.state.content}></input>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
        );
    }
}