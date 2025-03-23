import React, { useState } from 'react';

const Profile = () => {
  const [goal, setGoal] = useState('');
  const [customGoal, setCustomGoal] = useState('');
  const [description, setDescription] = useState('');
  const [matchedBuddies, setMatchedBuddies] = useState([]);
  const [error, setError] = useState('');

  const fitnessGoals = [
    'Lose Weight',
    'Build Muscle',
    'Increase Stamina',
    'Improve Flexibility',
    'Custom Goal'
  ];

  const handleMatch = () => {
    if (!goal) {
      setError('Please select a fitness goal.');
      return;
    }
    if (goal === 'Custom Goal' && !customGoal.trim()) {
      setError('Please enter your custom fitness goal.');
      return;
    }

    setError('');
    const buddyList = ['John', 'Lisa', 'Michael', 'Emily']; // Mock matched buddies
    setMatchedBuddies(buddyList);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Create Your Profile</h2>

        {/* Goal Selection */}
        <label className="block text-lg font-medium mb-2">Select Your Fitness Goal</label>
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>Select a goal...</option>
          {fitnessGoals.map((g, index) => (
            <option key={index} value={g}>
              {g}
            </option>
          ))}
        </select>

        {/* Custom Goal Input */}
        {goal === 'Custom Goal' && (
          <input
            type="text"
            placeholder="Enter your custom fitness goal"
            value={customGoal}
            onChange={(e) => setCustomGoal(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}

        {/* Description Box */}
        <label className="block text-lg font-medium mb-2">Add a Description (Optional)</label>
        <textarea
          rows="4"
          placeholder="Describe your fitness journey or preferences..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Submit Button */}
        <button
          onClick={handleMatch}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Find Workout Buddies
        </button>

        {/* Matched Buddies */}
        {matchedBuddies.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-center text-green-600">Matched Buddies</h3>
            <div className="grid grid-cols-2 gap-4">
              {matchedBuddies.map((buddy, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md text-center hover:bg-blue-50 transition"
                >
                  <p className="text-lg font-semibold">{buddy}</p>
                  <p className="text-sm text-gray-500">Goal: {goal === 'Custom Goal' ? customGoal : goal}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
