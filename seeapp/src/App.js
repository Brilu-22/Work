import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NextPage from "./pages/next/NextPage";

function App() {
  return (
    <section className="hero">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chart" element={<NextPage />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
