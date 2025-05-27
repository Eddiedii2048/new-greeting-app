import { useState } from "react";
import { useEffect } from "react";

export default function GreetingApp() {
    const [name, setName] = useState("");
    const [greeting, setGreeting] = useState("");
    const emoji =["👋", "😊", "🌟", "🎉", "💖"];
    const [emojiindex, setEmojiIndex] = useState(0);

    useEffect(() => {
        document.body.style.backgroundColor = emoji[emojiindex];
    }, [emojiindex]);

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" style={{ padding: '8px', marginRight: '8px', border:'1px solid gray', borderRadius:'6px'}}/>
            <button onClick={() => {setGreeting(`${emoji[emojiindex]} Hello, ${name}`); setEmojiIndex((emojiindex+1)%emoji.length);}} className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">Say Hello!</button>
            <p>{greeting}</p>
        </div>
    )
}