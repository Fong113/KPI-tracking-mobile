import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

interface BarGraphProps {
  options: any;
  data: any;
  className?:string;
}

const BarGraph: React.FC<BarGraphProps> = ({ options, data, className }) => {

  
  return (
      <Bar options={options} data={data} className={className} />
  );
}

export { BarGraph };

