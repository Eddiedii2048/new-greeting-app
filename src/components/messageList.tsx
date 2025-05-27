type Props = {
    messages: string[];
};

export default function messageList({ messages}: Props) {
    return (
        <div>
            {messages.map((message, index) =>(
                <li key={index}>{message}</li>
            ))}
        </div>
    );
}