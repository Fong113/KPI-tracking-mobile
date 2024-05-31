// import FlagIcon from "@/assets/icons/flag";
import TaskItem from "@/components/task/TaskItem";
import { Input, Pagination, Select } from "antd";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useTaskContext } from "@/contexts/taskContext";

export default function TodoPage() {

  const [openSearch, setOpenSearch] = useState<Boolean>(false);
  const { allTask } = useTaskContext()

  const handleOpenSearch = () => {
    setOpenSearch(prev => !prev);
  };

  return (
    <div className="">
      <div className="w-full text-[24px] text-center" onClick={handleOpenSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size='xs' /> Tìm kiếm
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
        {allTask.map((task) => (
          <TaskItem
            name={task.name}
            date={task.date}
            status={task.status}
            category={task.category}
          />
          
        ))}
      </div>

      <div className="fixed bg-white bottom-[50px] flex-grow w-full flex flex-row items-center justify-center mt-[20px]">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  )
}