import { Button } from "@/components/ui/button";
import CascaderInput from "@/components/ui/cascaderInput";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const language = [
  { value: 'vietnam', label: 'Tiếng Việt' },
  { value: 'english', label: 'English' },
];

const fomartDate = [
  { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
  { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
];

const fomartTime = [
  { value: '12', label: '12H (AM/PM)' },
  { value: '24', label: '24H' },
];

const country = [
  { value: 'vietnam', label: 'Việt Nam' },
  { value: 'usa', label: 'Mỹ' },
];

const timezone = [
  { value: '+7', label: '(GMT+7:00) Giờ Đông Dương, TP Hồ Chí Minh' },
  { value: '+5', label: '(GMT+5:00) Nhật Bản, Hàn Quốc' },
];

const notify = [
  { value: 'screen', label: 'Thông báo trên màn hình' },
  { value: 'mail', label: 'Gửi qua email' },
];

const notifyBefore = [
  { value: '15', label: '15 Phút' },
  { value: '30', label: '30 Phút' },
];

const weekStart = [
  { value: 'monday', label: 'Thứ hai' },
  { value: 'sunday', label: 'Chủ Nhật' },
];

const holidayDisplay = [
  { value: 'yes', label: 'Có' },
  { value: 'no', label: 'Không' },
];

type Props = {}

export default function SettingPage({ }: Props) {
  const handleSubmit = () => {
    toast.success("Cập nhật thành công");
  };

  const handleReset = () => {
    toast.success("Đã thiết lập lại cài đặt");
  };

  return (
    <div className="flex flex-col rounded-2xl border-2 border-gray-300 mt-2 w-full overflow-y-auto p-4">
      <div className="relative">
        <div className="text-3xl font-semibold text-left text-blue-500">
          Cài đặt
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-10 mt-6">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <CascaderInput label="Ngôn ngữ" options={language} defaultvalue="vietnam" />
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <CascaderInput label="Định dạng" options={fomartDate} defaultvalue="MM/DD/YYYY" />
            </div>
            <div className="w-full md:w-1/2">
              <CascaderInput label="Định dạng giờ" options={fomartTime} defaultvalue="12" />
            </div>
          </div>
          <CascaderInput label="Quốc gia" options={country} defaultvalue="vietnam" />
          <CascaderInput label="Múi giờ" options={timezone} defaultvalue="+7" />
          <div className="mt-4 flex justify-center items-center h-12 border-2 border-solid rounded-xl bg-white border-blue-600 text-sm font-medium text-blue-600 cursor-pointer">
            Thêm lịch
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <CascaderInput label="Cài đặt thông báo" options={notify} defaultvalue="screen" />
          <CascaderInput label="Thông báo trước sự kiện" options={notifyBefore} defaultvalue="30" />
          <CascaderInput label="Bắt đầu tuần vào" options={weekStart} defaultvalue="monday" />
          <CascaderInput label="Hiển thị lịch các ngày lễ" options={holidayDisplay} defaultvalue="no" />
        </div>
      </div>
      <div className="flex justify-around mt-10 mb-6">
        <Button variant="destructive" onClick={handleReset} className="text-white w-38 text-xl bg-red-500">
          Đặt lại mặc định
        </Button>
        <Button variant="submit" onClick={handleSubmit} className="text-white w-40 text-xl bg-blue-500">
          Lưu thay đổi
        </Button>
      </div>
    </div>
  );
}
