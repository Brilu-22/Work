import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Chart from "./pages/chart/ChartPage";

function App() {
  return (
    <section className="hero">
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Chart" element={<Chart />} />
          </Routes>
        </Router>
      </div>
    </section>
  );
}

export default App;
