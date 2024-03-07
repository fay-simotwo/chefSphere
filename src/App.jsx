// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import RecipeDetails from "./Pages/RecipeDetails"; // Import the new component

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />{" "}
        </Routes>
      </Router>
    </>
  );
}

export default App;
