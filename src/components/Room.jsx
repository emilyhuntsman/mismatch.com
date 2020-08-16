import React, { Component } from "react";
import { Chat, Channel, ChannelHeader, Thread, Window, MessageList, MessageInput } from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";

export default class Room extends Component {
    

    render() {
        return (
            <Chat client={this.client} theme={"messaging light"}>
            <Channel channel={this.channel}>
                <Window>
                    <ChannelHeader />
                    <MessageList />
                    <MessageInput />
                </Window>
                <Thread />
            </Channel>
            </Chat>
        );
    }
}