import { Carousel, Flex, Progress } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function HomePage() {

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className='w-full mb-[20px]'>
      <div className='flex flex-col gap-[20px] w-full px-[20px]' >
        <div className='flex justify-center w-full items-center text-[24px]'>Tổng quan</div>
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
      <div className='flex flex-col gap-[30px] w-full'>
        <div className='flex flex-col gap-[20px] w-full'>
          <div className='text-[24px] flex w-full items-center justify-center'>Tiến độ nhiệm vụ</div>
          <Flex align="center" justify='center' wrap gap={30}>
            <Progress type="circle" size={200} percent={50} />
          </Flex>
        </div>

      </div>



    </div>
  )
}