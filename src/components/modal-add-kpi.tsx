import { Modal, Input, DatePicker } from 'antd';
import { Button } from './ui/button';
// import { useState } from 'react';
import { toast } from 'react-toastify';

type KPIModal = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function AddKPIModal({open,setOpen} : KPIModal ) {

  // const [open, setOpen] = useState(false);
  const dateFormat = "DD/MM/YYYY";


  const handleAddKPI = () => {
    toast.success("Thêm KPI thành công")
    setOpen(false);
  }

  const handleCloseModal = () => {
    setOpen(false)
  }
  return (
    <Modal
      open={open}
      width={300}
      footer={null}
      centered
      onCancel={handleCloseModal}
      className="flex flex-col gap-[20px]"
    >
      <div className="flex flex-col mt-[30px] items-center my-[20px] gap-[20px]">
        <div className="flex flex-col gap-2 self-start w-full">
          <span className="text-2xl font-semibold">Tên KPI</span>
          <Input placeholder="Nhập tên KPI" />
        </div>
        <div className="flex flex-row gap-3">
          <div>
            <DatePicker inputReadOnly placeholder="Bắt đầu" format={dateFormat} />
          </div>
          <div>
            <DatePicker inputReadOnly placeholder="Kết thúc" format={dateFormat}  />
          </div>

        </div>

        <Button type="submit" className='text-xl  text-white font-semibold bg-blue-500' onClick={handleAddKPI}>Thêm KPI</Button>
      </div>

    </Modal>
  )
}