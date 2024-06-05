import React, { useState } from "react";
import TaskItem from "@/components/task/TaskItem";
import { Input, Pagination, Select } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useTaskContext } from "@/contexts/taskContext";
import { Link } from "react-router-dom";

export default function TodoPage() {
  const [openSearch, setOpenSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const { allTask } = useTaskContext();

  const handleOpenSearch = () => {
    setOpenSearch(prev => !prev);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value: string) => {
    setFilterStatus(value);
    setCurrentPage(1);
  };

  const tasksPerPage = 10;
  const filteredTasks = allTask.filter(task => {
    const matchesSearch = task.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus ? task.status === filterStatus : true;
    return matchesSearch && matchesStatus;
  });

  const totalTasks = filteredTasks.length;
  const startIndex = (currentPage - 1) * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;
  const currentTasks = filteredTasks.slice(startIndex, endIndex);

  return (
    <div className="">
      <div className="w-full text-[24px] text-center" onClick={handleOpenSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size='xs' /> Tìm kiếm
      </div>

      {openSearch && (
        <div className="flex flex-col mb-[80px] items-center w-full h-[40px] gap-[20px]">
          <div className="w-11/12">
            <Input 
              placeholder="Lọc theo tên" 
              className="mt-[20px] h-[30px]" 
              value={searchQuery}
              onChange={handleSearchChange} 
            />
          </div>
          <Select 
            className="w-11/12 h-[30px]" 
            placeholder="Lọc theo trạng thái"
            value={filterStatus}
            onChange={handleStatusChange}
          >
            <Select.Option value="">Tất cả</Select.Option>
            <Select.Option value="done">Đã hoàn thành</Select.Option>
            <Select.Option value="pending">Chưa hoàn thành</Select.Option>
          </Select>
        </div>
      )}

      <div className="flex flex-row flex-wrap gap-[10px] justify-between px-[20px] mt-[20px] mb-[40px]">
        {currentTasks.map((task) => (
          <Link className="w-[48%]" to={`/info-task/${task.id}`} key={task.id}>
            <TaskItem
              name={task.name}
              date={task.date}
              status={task.status}
              category={task.category}
            />
          </Link>
        ))}
      </div>

      <div className="fixed bg-white bottom-[50px] flex-grow w-full flex flex-row items-center justify-center mt-[20px]">
        <Pagination
          current={currentPage}
          pageSize={tasksPerPage}
          total={totalTasks}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}
