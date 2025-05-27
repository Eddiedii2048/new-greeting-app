import { useState} from "react";
type Props = {
    sentToList: (message: string) => void;
};


export default function MessageInput({sentToList}: Props) {

    const [message, setMessage] = useState("");
    const handleSubmit = () => {
        if (message.trim()) {
            sentToList(message);
            setMessage("");
        }
    };

    return (
        <div>
            <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}