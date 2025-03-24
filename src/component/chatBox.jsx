import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, onSnapshot, orderBy, query } from "firebase/firestore";

const ChatBox = ({ chatId, userName }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = collection(db, `chats_${chatId}`);
    const q = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = [];
      snapshot.forEach((doc) => messagesData.push(doc.data()));
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, [chatId]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    const messagesRef = collection(db, `chats_${chatId}`);
    await addDoc(messagesRef, {
      sender: userName,
      message,
      timestamp: new Date(),
    });

    setMessage("");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === userName ? "text-right" : ""}`}>
            <p className={`inline-block p-2 rounded-lg ${msg.sender === userName ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
              <strong>{msg.sender}:</strong> {msg.message}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex space-x-4">
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 rounded-lg flex-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
