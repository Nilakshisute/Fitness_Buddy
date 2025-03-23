import React from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./component/Login";
import Register from "./component/Register";
import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Protect HomePage Route */}
      <Route path="/home" element={<PrivateRoute component={HomePage} />} />
  </Routes>
  );
};

export default App;
