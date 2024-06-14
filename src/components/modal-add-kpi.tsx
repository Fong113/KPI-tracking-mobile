import React, { useState } from 'react';
import { Modal, Input, DatePicker } from 'antd';
import { Button } from './ui/button';
import { toast } from 'react-toastify';
import { Dayjs } from 'dayjs';
import { useTaskContext } from '@/contexts/taskContext';

type KPIModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddKPIModal({ open, setOpen }: KPIModalProps) {
  const { allCategory, setAllCategory } = useTaskContext();

  const dateFormat = "DD/MM/YYYY";

  // State for the KPI name and date range
  const [kpiName, setKpiName] = useState<string>('');
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  // Handle KPI name change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKpiName(e.target.value);
  };

  // Handle start date change
  const handleStartDateChange = (date: Dayjs | null) => {
    setStartDate(date);
  };

  // Handle end date change
  const handleEndDateChange = (date: Dayjs | null) => {
    setEndDate(date);
  };

  // Handle adding KPI
  const handleAddKPI = () => {
    const kpiData = {
      name: kpiName,
      dateStart: startDate ? startDate.format(dateFormat) : null,
      dateEnd: endDate ? endDate.format(dateFormat) : null,
      progress: '00.00'
    };
    
    // Update the allCategory state with the new KPI
    setAllCategory((prevCategories: any) => [...prevCategories, kpiData]);
    
    console.log('Updated Categories:', [...allCategory, kpiData]);
    toast.success("Thêm KPI thành công");
    setOpen(false);
  };

  // Handle closing modal
  const handleCloseModal = () => {
    setOpen(false);
  };

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
          <Input
            placeholder="Nhập tên KPI"
            value={kpiName}
            onChange={handleNameChange}
          />
        </div>
        <div className="flex flex-row gap-3">
          <div>
            <DatePicker
              inputReadOnly
              placeholder="Bắt đầu"
              format={dateFormat}
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div>
            <DatePicker
              inputReadOnly
              placeholder="Kết thúc"
              format={dateFormat}
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
        </div>
        <Button
          type="submit"
          className='text-xl text-white font-semibold bg-blue-500'
          onClick={handleAddKPI}
        >
          Thêm KPI
        </Button>
      </div>
    </Modal>
  );
}
