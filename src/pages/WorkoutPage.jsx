import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const WorkoutLog = ({ userId }) => {
  const [workout, setWorkout] = useState({ type: "", duration: 0 });
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    const logsRef = collection(db, `workouts_${userId}`);
    const snapshot = await getDocs(logsRef);
    const logsData = [];
    snapshot.forEach((doc) => logsData.push(doc.data()));
    setLogs(logsData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const logsRef = collection(db, `workouts_${userId}`);
    await addDoc(logsRef, workout);
    setWorkout({ type: "", duration: 0 });
    fetchLogs();
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Log Your Workout</h2>
      <form onSubmit={handleSubmit} className="flex space-x-4 mb-6">
        <input
          type="text"
          name="type"
          placeholder="Workout Type"
          value={workout.type}
          onChange={(e) => setWorkout({ ...workout, type: e.target.value })}
          className="border p-2 rounded-lg w-1/2"
          required
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration (mins)"
          value={workout.duration}
          onChange={(e) => setWorkout({ ...workout, duration: e.target.value })}
          className="border p-2 rounded-lg w-1/2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Add Workout
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Workout Progress</h2>
      {logs.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={logs}>
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="duration" fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>No workout logs found 😓</p>
      )}
    </div>
  );
};

export default WorkoutLog;
