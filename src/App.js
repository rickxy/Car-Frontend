import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CarBrands from "./pages/CarBrands";
import Cars from "./pages/Cars";
import CarParts from "./pages/CarParts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/car-brands" element={<CarBrands />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/car-parts" element={<CarParts />} />
        <Route path="/" element={<CarBrands />} />
      </Routes>
    </Router>
  );
}

export default App;
