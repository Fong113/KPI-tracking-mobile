import { Carousel, Progress } from 'antd';
import type { ProgressProps } from 'antd';
import TodayTask from '@/components/task/today-task';
import { Link } from 'react-router-dom';
const twoColors: ProgressProps['strokeColor'] = {
  '0%': '#108ee9',
  '100%': '#87d068',
};


export default function HomePage() {

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className='w-full mb-[20px] flex flex-col gap-7'>
      <div className='flex flex-col gap-3 w-full px-[20px]' >
        <div className='flex justify-center w-full items-center text-blue-500 font-semibold text-2xl'>Tiến độ của các KPI </div>
        <div className='flex flex-col justify-center gap-[10px] w-full'>
          <Carousel className='flex flex-row items-center' afterChange={onChange} autoplay>
            <div>
              <img src="chart1.png" alt="" />
            </div>
            <div>
              <img src="chart2.png" alt="" />
            </div>
            <div>
              <img src="chart3.png" alt="" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className='flex flex-col gap-[30px] mx-5 p-5 pt-0 bg-white border-solid shadow-md rounded-xl'>
        <div className='flex flex-col gap-3 w-full'>
          <div className='justify-center text-blue-500 font-semibold text-2xl w-full flex '>Nhiệm vụ hôm nay</div>
          <div className='flex flex-col gap-[20px]  max-h-[250px] overflow-hidden overflow-y-auto'>
            <Link to={"/info-task"}>
              <TodayTask name='Học từ vựng từ 500-600' category="Tiếng Nhật" startTime='08:00' endTime='10:00' status='done' />

            </Link>
            <TodayTask name='Code giao diện UI-UX' category="UI/UX" startTime='10:00' endTime='12:00' status='pending' />
            <TodayTask name='Học ngữ pháp' category="Tiếng Nhật" startTime='13:30' endTime='15:30' status='done' />
          </div>

        </div>
      </div>

      <div className='flex flex-col items-center gap-3'>
        <div className='justify-center text-blue-500 font-semibold text-[24px] mt-3'>Cây của tôi</div>
        <div className='flex flex-col justify-center items-center'>
          <img src="tree_2d.png" />
          <div className='w-52'>
            <Progress percent={60} strokeColor={twoColors} />
          </div>
          <div className='text-xl'>Cần thêm 40h nữa để trồng cây </div>

        </div>
      </div>



    </div>
  )
}