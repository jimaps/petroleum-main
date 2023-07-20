import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  Colors,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import faker from "faker";
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
      label: "初始累计产量",
      data: labels.map((i) => i * i),
      yAxisID: "y",
      segment: {
        borderColor: (ctx: any) => {
          console.log(ctx);
          if (ctx.p1DataIndex > labels.length / 2) {
            return "red";
          }
        },
      },
      spanGaps: true,
    },
    {
      label: "预计累计产量",
      data: [],
      yAxisID: "y",
    },

    {
      label: "产气量",
      data: labels.map((i) => (i / 400) ^ i),
      yAxisID: "y1",
    },

    {
      label: "预计产气量",
      data: [],
      yAxisID: "y1",
    },
  ],
};

export default function  () {
  return <Line options={options} data={data} />;
}
