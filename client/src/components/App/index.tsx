import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/training" element={<div>Traniing Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
