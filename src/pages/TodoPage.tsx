import FlagIcon from "@/assets/icons/flag";
import TaskItem from "@/components/task/TaskItem";
import { Input, Pagination, Select } from "antd";
import { useState } from "react";

export default function TodoPage() {

  const [openSearch, setOpenSearch] = useState<Boolean>(false);

  const handleOpenSearch = () => {
    setOpenSearch(prev => !prev);
  };

  return (
    <div className="">
      <div className="mt-[20px] w-full text-[24px] text-center" onClick={handleOpenSearch}>
        Tìm kiếm
      </div>

      {openSearch && <div className="flex flex-col mb-[80px] items-center w-full h-[40px] gap-[20px]">
        <div className="w-11/12">
          <Input placeholder="Lọc theo tên" className=" mt-[20px] h-[30px]" />
        </div>
        <Select className="w-11/12 h-[30px]" placeholder="Lọc theo trạng thái">
          <Select.Option value="Đã hoàn thành">Đã hoàn thành</Select.Option>
          <Select.Option value="Chưa hoàn thành">Chưa hoàn thành</Select.Option>
        </Select>
      </div>
      }
      <div className="flex flex-row flex-wrap gap-[10px] justify-between px-[20px] mt-[20px]">
        <TaskItem
          name="UX - UI"
          date="24/5"
          status="1"
        />
        <TaskItem
          name="Học từ vựng..."
          date="24/5"
          status="1"
        />
        <TaskItem
          name="Làm bài tập ... "
          date="24/5"
          status="2"
        />
        <TaskItem
          name="Chuẩn bị ..."
          date="24/5"
          status="1"
        />
        <TaskItem
          name="Học ngữ pháp ..."
          date="24/5"
          status="1"
        />
        <TaskItem
          name="Code giao diện.."
          date="24/5"
          status="2"
        />
        <TaskItem
          name="Soạn script.."
          date="24/5"
          status="1"
        />
      </div>

      <div className="fixed bottom-[60px] w-full flex flex-row items-center justify-center mt-[20px]">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  )
}