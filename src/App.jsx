import React from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./component/Login";
import Register from "./component/Register";
import PrivateRoute from "./pages/PrivateRoute";
import Profile from "./pages/Profile";
import BuddyChat from "./pages/BuddyChat";

const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Protect HomePage Route */}
      <Route path="/home" element={<PrivateRoute component={HomePage}  />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/buddychat" element={<BuddyChat />}/>
     
  </Routes>

  );
};

export default App;
