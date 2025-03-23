import React, { useState } from 'react';

const BuddyChat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const buddies = ['John', 'Emily', 'Alex'];

  const sendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { sender: 'You', text: message }]);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Chat with Your Workout Buddies</h2>

        <div className="border rounded-lg p-4 h-64 overflow-y-auto mb-4 bg-gray-50">
          {messages.length === 0 ? (
            <p className="text-gray-500">No messages yet. Start the conversation!</p>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'You' ? 'text-right' : 'text-left'}`}>
                <span
                  className={`inline-block px-3 py-1 rounded-lg ${
                    msg.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))
          )}
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuddyChat;
