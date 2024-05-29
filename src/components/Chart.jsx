import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //x axis
  LinearScale, //y axis
  PointElement,
  scales,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Chart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Data usage per network",
        data: [0, 1.1, 1.4, 1.3, 2, 2.2, 3.2],
        tension: 0.4,
        borderColor: "black",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 4,
        ticks: {
          callback: function (value) {
            const labels = ["0GB", "1GB", "3GB", "5GB", "10GB"];
            return labels[value];
          },
        },
        title: {
          display: true,
          text: "Data usage per network",

          font: {
            size: 14,
          },
          color: "#000",
        },
      },
    },
  };

  return (
    <div className="mt-20 w-[70%] h-[450px]">
      <Line
        data={data}
        options={options}
        className="w-[70%] h-[450px] md:m-auto md-w-[500px] md:h-[250px] md:my-6"
      ></Line>
    </div>
  );
}

export default Chart;
