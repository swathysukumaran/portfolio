import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TempoCaseStudy from "./pages/Projects/TempoCaseStudy";
import BrightFuturesCaseStudy from "./pages/Projects/BrightFuturesCaseStudy";
import HRMCCaseStudy from "./pages/Projects/HRMCCaseStudy";
import Layout from "./components/Layout"; // ⬅️ adjust path if needed

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/projects/tempo"
          element={
            <Layout>
              <TempoCaseStudy />
            </Layout>
          }
        />
        <Route
          path="/projects/brightfutures"
          element={
            <Layout>
              <BrightFuturesCaseStudy />
            </Layout>
          }
        />
        <Route
          path="/projects/hrmc"
          element={
            <Layout>
              <HRMCCaseStudy />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
