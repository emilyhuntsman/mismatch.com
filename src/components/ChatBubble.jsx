// copied from react-chat-bubble https://github.com/sabinbajracharya/react-chat-bubble/blob/master/src/components/ChatBubble.js to make minor tweaks from the npm package

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './ChatBubble.css';

class ChatBubble extends Component {

    getConversations(messages){
        if(messages === undefined){
        return;
        }

        const listItems = messages.map((message, index) => {
        let bubbleClass = 'me';
        let bubbleDirection = '';

        if(message.type === 0){
            bubbleClass = 'you';
            bubbleDirection = "bubble-direction-reverse";
        }
        return (
                <div className={`bubble-container ${bubbleDirection}`} key={index}>
                    <p>{message.author}</p>
                    <div className={`bubble ${bubbleClass}`}>{message.text}</div>
                </div>
            );
        });
        return listItems;
    }

    render() {
        const {props: {messages}} = this;
        const chatList = this.getConversations(messages);

        return (
        <div className="chats">
            <div className="chat-list">
            {chatList}
            </div>
        </div>
        );
    }
    }

    ChatBubble.propTypes = {
    messages: PropTypes.array.isRequired,
};

export default ChatBubble;