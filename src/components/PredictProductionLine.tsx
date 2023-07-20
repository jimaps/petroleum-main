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
  plugins: {
    legend: {
      position: 'top' as const,
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
      label: '预测油压',
      data: labels.map(() => faker.datatype.number({ min: 100, max: 300 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default function PredictProductionLine() {
  return <Line options={options} data={data} />;
}
