import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TempoCaseStudy from "./pages/Projects/TempoCaseStudy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/tempo" element={<TempoCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
