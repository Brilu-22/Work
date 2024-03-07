import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import "./next.scss";

export default function StockPriceChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    // Sample data for wave-like pattern
    const waveData = [
      120, 125, 130, 135, 140, 145, 150, 155, 160, 155, 150, 145, 140, 135, 130,
      135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 175, 170, 165, 160,
    ];

    chartInstance.current = new Line(myChartRef, {
      data: {
        labels: Array.from(
          { length: waveData.length },
          (_, i) => `Day ${i + 1}`
        ),
        datasets: [
          {
            label: "Wave Data",
            data: waveData,
            fill: true, // Fill area under the line
            tension: 0.5, // Adjust tension for wave-like appearance
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Light blue color with opacity
            borderColor: "rgb(75, 192, 192)", // Solid line color
            borderWidth: 2,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Wave Chart",
            font: {
              size: 18,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="chart">
          <canvas ref={chartRef} style={{ width: "600px", height: "400px" }} />
        </div>
      </div>
    </div>
  );
}
