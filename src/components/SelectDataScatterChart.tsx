import {
  Chart as ChartJS,
  Colors,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
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
      title: {
        display: true,
        text: "Day",
      },
      stacked: true,
      beginAtZero: true,
    },
  },

  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
};

const labels = Array.from({ length: 100 }, (_, i) => i);
export const data = {
  labels,

  datasets: [
    {
      label: "流压",
      data: Array.from({ length: 100 }, (_, i) => ({
        x: i,
        y: i * 0.4 + faker.datatype.number({ min: 0, max: 100 }),
      })),
      stack: "combined",
      showLine: true,
    },
    {
      label: "产气量",
      data: Array.from({ length: 100 }, (_, i) => ({
        x: i,
        y: i * 1.2 + faker.datatype.number({ min: 100, max: 150 }),
      })),
      stack: "combined",
      showLine: true,
    },
  ],
};

export default function FlowPressureLineChart() {
  return <Scatter options={options} data={data} />;
}
