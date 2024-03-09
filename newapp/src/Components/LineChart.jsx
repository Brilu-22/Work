import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

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

    chartInstance.current = new Chart(myChartRef, {
      type: "line", // Change to "line" for area chart
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
    <>
      <canvas ref={chartRef} style={{ width: "600px", height: "400px" }} />
    </>
  );
}
