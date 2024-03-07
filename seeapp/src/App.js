import React, { useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NextPage from "./pages/next/NextPage";

function App() {
  const myRef = useRef(null);

  return (
    <section className="hero">
      <div className="app" ref={myRef}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Chart" element={<NextPage />} />
          </Routes>
        </Router>
      </div>
    </section>
  );
}

export default App;
