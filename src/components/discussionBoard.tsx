import MessageInput from "./messageInput";
import MessageList from "./messageList";
import { useState } from "react";

export default function discussionBoard() {
    const [messages, setMessage] = useState<string[]>([]);
    const handleSend = (message:string) => {
        setMessage([...messages, message]);
    };

    return (
        <div>
            <MessageInput sentToList={handleSend}/>
            <MessageList messages = {messages}/>
        </div>
    );
}