import {
  Chart as ChartJS,
  Colors,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  LogarithmicScale,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import faker from "faker";

import tcaData from "../data/csv.json";

ChartJS.register(
  LogarithmicScale,
  LinearScale,
  Colors,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const options = {
  type: "scatter",
  responsive: true,
  maintainAspectRatio: false,

  scales: {
    x: {
      beginAtZero: false,
      type: "logarithmic" as const,
    },
    y: {
      type: "logarithmic" as const,
    },
  },

  plugins: {
    colors: {
      forceOverride: true,
    },
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "tcad",
    },
  },
};

export const data = {
  datasets: [
    {
      label: "q/dpp",
      data: tcaData.map((d) => ({
        x: d["tca,d"],
        y: d["q/dpp"],
      })),
    },
    {
      label: "q/dppi",
      data: tcaData.map((d) => ({
        x: d["tca,d"],
        y: d["q/dppi"],
      })),
    },
    {
      label: "q/dppid",
      data: tcaData.map((d) => ({
        x: d["tca,d"],
        y: d["q/dppid"],
      })),
    },
    {
      label: "qDd",
      data: tcaData.map((d) => ({
        x: d["tca"],
        y: d["qDd"],
      })),
    },
    {
      label: "qDdi",
      data: tcaData.map((d) => ({
        x: d["tca"],
        y: d["qDdi"],
      })),
    },
    {
      label: "qDdid",
      data: tcaData.map((d) => ({
        x: d["tca"],
        y: d["qDdid"],
      })),
    },
  ],
};

export default function TCADChart() {
  return <Scatter options={options} data={data} />;
}
