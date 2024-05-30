// import FlagIcon from "@/assets/icons/flag";
import TaskItem from "@/components/task/TaskItem";
import { Input, Pagination, Select } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

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
          name="Code mobile.."
          date="24/5"
          status="1"
          category="UI/UX"
        />

        <TaskItem
          name="Làm bài tập ... "
          date="24/5"
          category="Tiếng nhật"
          status="2"
        />
        <TaskItem
          name="Chuẩn bị ..."
          category="Tiếng nhật"
          date="24/5"
          status="1"
        />
        <TaskItem
          name="Học ngữ pháp ..."
          category="Tiếng nhật"
          date="24/5"
          status="1"
        />
        <TaskItem
          name="Code giao diện.."
          date="24/5"
          category="UI/UX"
          status="2"
        />
        <TaskItem
          name="Soạn script.."
          category="Tiếng nhật"
          date="24/5"
          status="1"
        />
        <Link to={'/info-task'} className="w-full inline-flex">
          <TaskItem
            name="Học từ vựng..."
            date="24/5"
            category="Tiếng nhật"
            status="1"
          />
        </Link>
      </div>

      <div className="fixed bottom-[60px] w-full flex flex-row items-center justify-center mt-[20px]">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  )
}