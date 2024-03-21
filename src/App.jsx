import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ChefProfiles from "./Pages/ChefProfiles";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/profile/:chefName" element={<ChefProfiles />} />
        <Route path="*" element={<h1 className="text-center text-3xl mt-8">Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
