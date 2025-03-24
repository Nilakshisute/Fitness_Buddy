import { useEffect, useState } from "react";
import { matchBuddies } from "../utils/matchBuddies";

const BuddiesPage = ({ profile }) => {
  const [buddies, setBuddies] = useState([]);

  useEffect(() => {
    const fetchBuddies = async () => {
      const matched = await matchBuddies(profile);
      setBuddies(matched);
    };
    fetchBuddies();
  }, [profile]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Matched Buddies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {buddies.length > 0 ? (
          buddies.map((buddy) => (
            <div
              key={buddy.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{buddy.name}</h3>
              <p>Location: {buddy.location}</p>
              <p>Goals: {buddy.goals}</p>
              <p>Preferences: {buddy.preferences.join(", ")}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">No matching buddies found 😢</p>
        )}
      </div>
    </div>
  );
};

export default BuddiesPage;
