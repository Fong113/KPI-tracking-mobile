import { Carousel, Progress } from 'antd';
import type { ProgressProps } from 'antd';
import TodayTask from '@/components/task/today-task';
import { Link } from 'react-router-dom';
import { useTaskContext } from '@/contexts/taskContext';
import { useEffect, useState } from 'react';
import moment from 'moment';

const twoColors: ProgressProps['strokeColor'] = {
  '0%': '#108ee9',
  '100%': '#87d068',
};

export default function HomePage() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const [todayTask, setTodayTask] = useState<any[]>([]);
  const { allTask } = useTaskContext();

  useEffect(() => {
    const today = moment().format('DD/MM/YYYY'); // Adjusting the date format to match the provided format
    const filteredTasks = allTask.filter(task => task.date === today);

    // Sort tasks by start time

    const sortedTasks = filteredTasks.sort((a, b) => {
      const timeA = moment(a.timeStart, 'HH:mm').toDate();
      const timeB = moment(b.timeStart, 'HH:mm').toDate();
      return timeA.getTime() - timeB.getTime();
    });

    setTodayTask(sortedTasks);
  }, [allTask]);

  return (
    <div className='w-full mb-[20px] flex flex-col gap-7'>
      <div className='flex flex-col gap-3 w-full px-[20px]' >
        <div className='flex justify-center w-full items-center text-blue-500 font-semibold text-2xl'>Tiến độ của các KPI </div>
        <div className='flex flex-col justify-center gap-[10px] w-full'>
          <Link to={"/report"}>
            <Carousel className='flex flex-row items-center' afterChange={onChange} autoplay>
              <div>
                <img src="chart1.png" alt="Chart 1" />
              </div>
              <div>
                <img src="chart2.png" alt="Chart 2" />
              </div>
              <div>
                <img src="chart3.png" alt="Chart 3" />
              </div>
            </Carousel>
          </Link>

        </div>
      </div>
      <div className='flex flex-col gap-[30px] mx-5 p-5 pt-0 bg-white border-solid shadow-md rounded-xl'>
        <div className='flex flex-col gap-3 w-full'>
          <div className='justify-center text-blue-500 font-semibold text-2xl w-full flex '>Nhiệm vụ hôm nay</div>
          <div className='flex flex-col gap-[20px] max-h-[250px] overflow-hidden overflow-y-auto'>
            {todayTask.map(task => (
              <Link to={`/info-task/${task.id}`} key={task.id}>
                <TodayTask
                  name={task.name}
                  category={task.category}
                  startTime={task.timeStart}
                  endTime={task.timeEnd}
                  status={task.status}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center gap-3'>
        <div className='justify-center text-blue-500 font-semibold text-[24px] mt-3'>Cây của tôi</div>
        <div className='flex flex-col justify-center items-center'>
          <img src="tree_2d.png" alt="Tree" />
          <div className='w-52'>
            <Progress percent={60} strokeColor={twoColors} />
          </div>
          <div className='text-xl'>Cần thêm 40h nữa để trồng cây </div>
        </div>
      </div>
    </div>
  );
}
