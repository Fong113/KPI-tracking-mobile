import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Task {
  id: string;
  name: string;
  status: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  place: string;
  number_file: number;
  category: string;
}

interface TaskContextProps {
  allTask: Task[];
  setAllTask: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [allTask, setAllTask] = useState<Task[]>([
    {
      id: "1",
      name: "Đặt kế hoạch học tập",
      status: "pending",
      date: "2024-06-01",
      timeStart: "08:00",
      timeEnd: "10:00",
      place: "Thư viện",
      number_file: 2,
      category: "Study",
    },
    {
      id: "2",
      name: "Thiết kế giao diện mới",
      status: "done",
      date: "2024-06-02",
      timeStart: "09:00",
      timeEnd: "12:00",
      place: "Công ty",
      number_file: 1,
      category: "Work",
    },
    {
      id: "3",
      name: "Dọn dẹp nhà cửa",
      status: "pending",
      date: "2024-06-03",
      timeStart: "10:00",
      timeEnd: "11:30",
      place: "Nhà",
      number_file: 3,
      category: "Personal",
    },
    {
      id: "4",
      name: "Thực hành yoga",
      status: "done",
      date: "2024-06-04",
      timeStart: "07:00",
      timeEnd: "08:00",
      place: "Công viên",
      number_file: 0,
      category: "Exercise",
    },
    {
      id: "5",
      name: "Đi picnic cùng bạn bè",
      status: "done",
      date: "2024-06-05",
      timeStart: "11:00",
      timeEnd: "15:00",
      place: "Sân bay",
      number_file: 2,
      category: "Social",
    },
    {
      id: "6",
      name: "Đọc sách về lịch sử",
      status: "pending",
      date: "2024-06-06",
      timeStart: "13:00",
      timeEnd: "14:30",
      place: "Café",
      number_file: 1,
      category: "Study",
    },
    {
      id: "7",
      name: "Tham gia lớp học trực tuyến",
      status: "done",
      date: "2024-06-07",
      timeStart: "19:00",
      timeEnd: "21:00",
      place: "Online",
      number_file: 4,
      category: "Study",
    },
  ]);

  return (
    <TaskContext.Provider value={{ allTask, setAllTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export default TaskContext;
