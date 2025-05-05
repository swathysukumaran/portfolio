import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TempoCaseStudy from "./pages/Projects/TempoCaseStudy";
import BrightFuturesCaseStudy from "./pages/Projects/BrightFuturesCaseStudy";
import HRMCCaseStudy from "./pages/Projects/HRMCCaseStudy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/tempo" element={<TempoCaseStudy />} />
        <Route
          path="/projects/brightfutures"
          element={<BrightFuturesCaseStudy />}
        />
        <Route path="/projects/hrmc" element={<HRMCCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
