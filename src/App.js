import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Etusivu from "./components/Etusivu";
import { Routes, Route } from "react-router-dom";
import Kynnet from "./components/Kynnet";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Etusivu" element={<Etusivu />} />
        <Route path="/Kynnet" element={<Kynnet />} />
      </Routes>
    </div>
  );
};
export default App;
