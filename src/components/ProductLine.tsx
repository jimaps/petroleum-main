import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.defaults.backgroundColor = '#FFFFFF';
ChartJS.defaults.borderColor  = '#FFFFFF';
ChartJS.defaults.color   = '#FFFFFF';
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const startDate = new Date(); // 当前日期
const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000); // 加 7 天

const labels = [];
const currentDay = new Date(startDate);

while (currentDay <= endDate) {
  labels.push(currentDay.toISOString().slice(0, 10));
  currentDay.setDate(currentDay.getDate() + 1);
}

export const data = {
  labels,
  datasets: [
    {
      label: '每日产气量',
      data: labels.map(() => faker.datatype.number({ min: 100, max: 300 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: '每日产水量',
      data: labels.map(() => faker.datatype.number({ min: 100, max: 300 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};

export default function ProductionLineChart() {
  return <Line options={options} data={data} />;
}
