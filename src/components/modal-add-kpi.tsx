import { Modal, Input, DatePicker, Button } from 'antd';
// import { useState } from 'react';
import { toast } from 'react-toastify';

type KPIModal = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function AddKPIModal({open,setOpen} : KPIModal ) {

  // const [open, setOpen] = useState(false);


  const handleCloseModal = () => {
    toast.success("Thêm KPI thành công")
    setOpen(false);
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
      <div className="flex flex-col mt-[30px] my-[20px] gap-[20px]">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-medium">Tên KPI</span>
          <Input placeholder="Nhập tên KPI" />
        </div>
        <div className="flex flex-row gap-3">
          <div>
            <DatePicker inputReadOnly placeholder="Bắt đầu" />
          </div>
          <div>
            <DatePicker inputReadOnly placeholder="Kết thúc" />
          </div>

        </div>

        <Button type="primary" onClick={handleCloseModal}>Thêm KPI</Button>
      </div>

    </Modal>
  )
}