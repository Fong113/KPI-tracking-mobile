import { useState, ChangeEvent } from "react";
import TaskItem from "@/components/task/TaskItem";
import { Input, Pagination, Select } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useTaskContext } from "@/contexts/taskContext";
import { Link } from "react-router-dom";
type Task = any;
export default function TodoPage() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>(''); // New state for sorting
  const { allTask } = useTaskContext();

  const handleOpenSearch = () => {
    setOpenSearch(prev => !prev);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value: string) => {
    setFilterStatus(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortOrder(value);
    setCurrentPage(1);
  };

  const tasksPerPage = 10;
  const filteredTasks = allTask
    .filter((task: Task) => {
      const matchesSearch = task.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = filterStatus ? task.status === filterStatus : true;
      return matchesSearch && matchesStatus;
    })
    .sort((a: Task, b: Task) => {
      if (sortOrder === 'newest') {
        return new Date(b.date.split('/').reverse().join('-')).getTime() - new Date(a.date.split('/').reverse().join('-')).getTime();
      } else if (sortOrder === 'oldest') {
        return new Date(a.date.split('/').reverse().join('-')).getTime() - new Date(b.date.split('/').reverse().join('-')).getTime();
      }
      return 0;
    });

  const totalTasks = filteredTasks.length;
  const startIndex = (currentPage - 1) * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;
  const currentTasks = filteredTasks.slice(startIndex, endIndex);

  return (
    <div>
      <div className="w-full text-[24px] text-center cursor-pointer" onClick={handleOpenSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size='xs' /> Tìm kiếm
      </div>

      {openSearch && (
        <div className="flex flex-col mb-[120px] items-center w-full h-[40px] gap-[20px]">
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
          <Select
            className="w-11/12 h-[30px]" 
            placeholder="Sắp xếp theo ngày"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <Select.Option value="">Mặc định</Select.Option>
            <Select.Option value="newest">Nhiệm vụ mới nhất</Select.Option>
            <Select.Option value="oldest">Nhiệm vụ cũ nhất</Select.Option>
          </Select>
        </div>
      )}

      <div className="flex flex-row flex-wrap gap-[10px] justify-between px-[20px] mt-[20px] mb-[40px]">
        {currentTasks.map((task: Task) => (
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
