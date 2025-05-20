import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Dashboard from "../Dashboard";
import ProtectedRoute from "../ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ✅ Redirect from root to /login */}
      <Route path="/" element={<Navigate to="/login" />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Protected routes wrapper */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add other protected routes here */}
      </Route>
      
      {/* Fallback route for unknown paths */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;