import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const HorizontalBarChart = ({ timeToFirstMerge }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (timeToFirstMerge) {
      if (chartRef.current) {
        // If a chart already exists, destroy it before creating a new one
        chartRef.current.destroy();
      }

      const ctx = document.getElementById("timeToMergeChart");

      if (ctx) {
        const labels = timeToFirstMerge?.averageMergeTime?.newest5?.map(item => " Pull #" + item.number );
        const data =  timeToFirstMerge?.averageMergeTime?.newest5?.map(item => item.days);
        chartRef.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Average of last 5 pull requests in days",
                data: data,
                backgroundColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(255, 159, 64, 1)",
                  "rgba(255, 205, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(201, 203, 207, 1)",
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              x: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [timeToFirstMerge]);

  return (
    <div>
      <canvas id="timeToMergeChart" width="368px" height="368px"></canvas>
    </div>
  );
};

export default HorizontalBarChart;
