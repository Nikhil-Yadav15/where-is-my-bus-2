import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AdminDashboard from "./pages/AdminDashboard";
import UsersDashboard from "./pages/UsersDashboard";
import StaffDashboard from "./pages/StaffDashboard";

function App() {
  return (
    <div className="App bg-slate-50 min-h-screen">
      <BrowserRouter>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 ml-64">
            <Routes>
              <Route path="/" element={<Navigate to="/admin" replace />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/users" element={<UsersDashboard />} />
              <Route path="/staff" element={<StaffDashboard />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;