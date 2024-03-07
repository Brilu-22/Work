import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NextPage from "./pages/next/NextPage";
import PieChart from "./pages/next/Piechart";
import BarChart from "./pages/next/Barchart";
import LineChart from "./pages/next/LineChart";

function App() {
  return (
    <div className="App">
      <PieChart />
      <BarChart />
      <LineChart />
      <section className="hero">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Chart" element={<NextPage />} />
          </Routes>
        </Router>
      </section>
    </div>
  );
}

export default App;
