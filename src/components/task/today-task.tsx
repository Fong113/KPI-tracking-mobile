import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faLayerGroup, faUpDown } from '@fortawesome/free-solid-svg-icons';

type Props = {
  status: string,
  startTime: string,
  endTime: string,
  name: string,
  place?: string,
  category?: string,


}

const getStatus = (status: string) => {

  switch (status) {
    case 'pending':
      return "Chưa hoàn thành"
    case 'done':
      return "Đã hoàn thành"
    default:
      break;
  }
}

export default function TodayTask({ name, status, startTime, endTime, category }: Props) {
  return (
    <div className={` p-5  h-24 flex flex-row rounded-[10px] items-center gap-7 ${status === 'pending' ? 'bg-blue-100' : 'bg-red-100'}`}
    >
      <div className="flex flex-col text-xl">
        <div>{startTime}</div>
        <FontAwesomeIcon icon={faUpDown} size="xs" style={{ color: "#6e6e6e", }} />
        <div className='text-[#6e6e6e]'>{endTime}</div>
      </div>
      <div className='text-xl flex flex-col gap-3 flex-1'>
        <div className='h-[24px] overflow-hidden'>{name}</div>
        <div className='flex flex-col gap-[4px] text-[14px] '>
          <div className='flex flex-row gap-1 h-[14px] items-center font-semibold text-blue-900'><FontAwesomeIcon icon={faLayerGroup} size='xs' style={{color: "#B197FC",}} />{category}</div>
          <div className={`flex flex-row gap-1 h-[14px] items-center ${status === 'pending' ? 'text-[#6e6e6e]' : 'text-black' }`}><FontAwesomeIcon icon={faCircle} style={{ color: status === 'process' ? "#74C0FC" : 'red', fontSize: '7px' }} />{getStatus(status)}</div>
        </div>


      </div>
    </div>
  )
}