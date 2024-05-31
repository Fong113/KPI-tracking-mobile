import { Button, TimePicker, Select } from "antd"
import { InputProfile } from "@/pages/Personal"
import dayjs from 'dayjs';
import BellIcon from "@/assets/icons/bell";
import DownIcon from "@/assets/icons/down";
import { Textarea } from "../ui/textarea";
import { toast } from "react-toastify";
const optionsSelect = [
  { value: 'peding', label: 'Đã hoàn thành' },
  { value: 'done', label: 'Chưa hoàn thành' },
 
]
import { useNavigate } from "react-router-dom";
const format = 'HH:mm';
export default function TaskInfo() {
  const navigate = useNavigate()
  const handlesubmit = () => {
    toast.success("Lưu thay đổi thành công")
    navigate('/todo')

  }
  return (
    <div>
      <div>
        <span className="text-blue-500 ml-5 text-2xl font-semibold">Thông tin nhiệm vụ</span>
      </div>
      <div className="p-5 flex flex-col gap-5">
        <InputProfile
          label="Tiêu đề"
          defaultValue="Học từ vựng tiếng nhật 500-600"
        />
        <InputProfile
          label="Địa điểm"
          defaultValue="Làm tại nhà"
        />
        <div className="flex flex-col gap-2 w-full">
          <span className="text-xl font-medium">Thời gian</span>
          <div className="w-full">
            <TimePicker.RangePicker className=" w-full border-solid border-[2px] border-black/30 h-[40px]" defaultValue={[dayjs('08:00', format), dayjs('10:00', format)]} format={format} />
          </div>
        </div>
        <div className="flex flex-row gap-[13px] items-center">
          <BellIcon />
          <DownIcon />
          <div className="text-black text-xl font-normal">Trước 30 phút</div>
        </div>
        <div>
          <span className="text-xl font-medium">Trạng thái</span>
          <div className="w-[100px]">
          <Select
          defaultValue='done'
          style={{ width: 170 }}
          // onChange={handleChange}
          options={optionsSelect}
        />
          </div>
        </div>
        <div>
        <Textarea className="w-full" placeholder="Ghi chú" />

        </div>
        <Button onClick={handlesubmit} type="primary">Lưu thay đổi</Button>
      </div>
    </div>
  )
}