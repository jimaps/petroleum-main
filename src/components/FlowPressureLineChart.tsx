import {
  CategoryScale,
  Chart as ChartJS,
  Colors,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Colors,
  Title,
  Tooltip,
  Legend
);

export const options = {
  type: "line",

  responsive: true,
  maintainAspectRatio: false,

  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  fill: false,

  radius: 0,
  plugins: {
    colors: {
      forceOverride: true,
    },
    legend: {
      position: "bottom" as const,
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
    },
  },
};

const labels = Array.from({ length: 400 }, (_, i) => i);
export const data = {
  labels,
  datasets: [
    {
      label: "流压",
      data: labels.map((i) => i * i),
      yAxisID: "y",
    },
  ],
};

export default function FlowPressureLineChart() {
  return <Line options={options} data={data} />;
}
