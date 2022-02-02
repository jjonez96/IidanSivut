import React from "react";
import "./Nav/App.css";
import Navbar from "./Nav/Navbar";
import Etusivu from "../pages/Etusivu";
import { Routes, Route } from "react-router-dom";
import Kynnet from "../pages/Kynnet";
import Footer from "../pages/Footer";

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
