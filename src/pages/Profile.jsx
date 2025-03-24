import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    location: "",
    goals: "",
    preferences: [],
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePreferences = (e) => {
    const { value, checked } = e.target;
    setProfile((prev) =>
      checked
        ? { ...prev, preferences: [...prev.preferences, value] }
        : { ...prev, preferences: prev.preferences.filter((pref) => pref !== value) }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "profiles"), profile);
      alert("Profile Created Successfully!");
    } catch (error) {
      console.error("Error creating profile: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold">Location</label>
        <input
          type="text"
          name="location"
          value={profile.location}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold">Fitness Goals</label>
        <select
          name="goals"
          value={profile.goals}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">Select Goal</option>
          <option value="Weight Loss">Weight Loss</option>
          <option value="Muscle Gain">Muscle Gain</option>
          <option value="Endurance">Endurance</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold">Workout Preferences</label>
        <div>
          <label className="mr-4">
            <input type="checkbox" value="Cardio" onChange={handlePreferences} /> Cardio
          </label>
          <label className="mr-4">
            <input type="checkbox" value="Strength" onChange={handlePreferences} /> Strength
          </label>
          <label>
            <input type="checkbox" value="Yoga" onChange={handlePreferences} /> Yoga
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold">Extra Description</label>
        <textarea
          name="description"
          value={profile.description}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          rows="3"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Save Profile
      </button>
    </form>
  );
};

export default Profile;
