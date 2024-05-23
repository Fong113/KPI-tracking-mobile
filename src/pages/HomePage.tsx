import { Flex, Progress } from 'antd';

export default function HomePage() {
  return (
    <div className=' w-[100%]'>
      <div className='flex mt-10 justify-center'>
        <Flex align="center" justify='center' wrap gap={30}>
          <Progress type="circle" size={200} percent={50} />
        </Flex>
      </div>

    </div>
  )
}