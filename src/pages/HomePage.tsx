import { Carousel, } from 'antd';

// const contentStyle: React.CSSProperties = {
//   margin: 0,
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

export default function HomePage() {

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className='w-full mb-[20px]'>
      <div className='flex flex-col gap-[20px] w-full px-[20px]' >
        <div className='flex justify-center w-full items-center text-blue-500 font-semibold text-2xl'>Tổng quan</div>
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
      <div className='flex flex-col gap-[30px] w-full px-[20px]'>
        <div className='flex flex-col gap-[20px] w-full '>
          <div className='justify-center text-blue-500 font-semibold text-[24px] w-full flex mt-3 '>Task hôm nay</div>
          <div className='px-[10px] bg-blue-300 py-[6px] flex flex-col gap-[6px] rounded-[15px]'
          >
            <div className='flex flex-row justify-between'>
              <div>Tiếng Nhật</div>
              <div>1.5h</div>
            </div>
            <div>
              Chưa hoàn thành
            </div>
          </div>

          <div className='px-[10px] bg-blue-300 py-[6px] flex flex-col gap-[6px] rounded-[15px]'
          >
            <div className='flex flex-row justify-between'>
              <div>UX - UI</div>
              <div>1.5h</div>
            </div>
            <div>
              Chưa hoàn thành
            </div>
          </div>
          
          <div className='px-[10px] bg-blue-300 py-[6px] flex flex-col gap-[6px] rounded-[15px]'
          >
            <div className='flex flex-row justify-between'>
              <div>ITSS</div>
              <div>2.5h</div>
            </div>
            <div>
              Đã hoàn thành
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center mt-[10px]'>
        <div className='justify-center text-blue-500 font-semibold text-[24px] mt-3'>Cây của tôi</div>
        <div>
          <img src="tree_2d.png" />
        </div>
      </div>



    </div>
  )
}