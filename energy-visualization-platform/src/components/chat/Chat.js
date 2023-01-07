import React from "react";
import "./Chat.css"
import {useState} from "react";

export default function Chat({ msgList, sendMessage }) {

    const [message, setMessage] = useState("");

    function handler() {
        const msg = message.value;
        sendMessage(msg);
        setMessage("");
    }

    const handleTextareaInput = event => {
        const value = event.target.value;
        setMessage(value);
    }

    return (
        <div className="chat">
            <div className="chat-list">
                {msgList.map((chat, i) => (
                    <ChatCard chat={chat} key={i} />
                ))}
            </div>
            <div className="chat-input">
                <div style={{flex: "3 1 90%"}}>
                    <textarea
                        id="msgTextArea"
                        value={message}
                        name="message"
                        onChange={handleTextareaInput}/>
                </div>
                <div
                    style={{
                        padding: "5px",
                        marginLeft: "5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <button onClick={handler}>Send</button>
                </div>
            </div>
        </div>
    );
}

function ChatCard({chat}) {
    return (
        <div>
            <div style={{ fontSize: "9px", marginLeft: "4px", paddingLeft: "8px" }}>
                <span>{chat.from}</span>
            </div>
            <div className={chat.mine ? "chatcard chatcard-mine" : "chatcard chatcard-friend"}>
                <div className="chatcard-msg">
                    <span>{chat.msg}</span>
                </div>
                <div className="chatcard-time">
                    <span>{chat.time}</span>
                </div>
            </div>
        </div>
    )
}
