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


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineGraphProps {
    options: any;
    data: any;
  }

const LineGraph: React.FC<LineGraphProps > = ({ options, data }) => {
    
    return <Line options={options} data={data} />;
}

export { LineGraph }

