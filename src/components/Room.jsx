import React, { Component } from "react";
import { Chat, Channel, ChannelHeader, Thread, Window, MessageList, MessageInput } from "stream-chat-react";
import { StreamChat } from 'stream-chat';
import "stream-chat-react/dist/css/index.css";

// const chat = new StreamChat("qk4nn7rpcn75");
// const userToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY29vbC1za3ktOSJ9.mhikC6HPqPKoCP4aHHfuH9dFgPQ2Fth5QoRAfolJjC4";

// chat.setUser({
//     id: "emily",
//     name: "emily" },
//     userToken,
// );

// const channel = chat.channel("messaging", "godevs", {
//     image: "./messaging.png",
//     name: "Test Room"
// });

export default class Room extends Component {
    constructor(props) {
        super(props);
        //this.client = new StreamChat("89437");
        this.client = new StreamChat("qk4nn7rpcn75");
        const userToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY29vbC1za3ktOSJ9.mhikC6HPqPKoCP4aHHfuH9dFgPQ2Fth5QoRAfolJjC4";

        this.client.setUser({
            id: "cool-sky-9",
            name: "Cool Sky",
            image: "user.png"
        },
        //localStorage.getItem("token")
        userToken
        );
    
        this.channel = this.client.channel("messaging", "godevs", {
        image:
            "messaging.png",
        name: "Talk about..."
        });
    }
    

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