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
      name: "Tiếng Nhật",
      status: "pending",
      date: "28-05-2024",
      timeStart: "08:00",
      timeEnd: "10:15",
      place: "Thư viện",
      number_file: 2,
      category: "Study",
    },
    {
      id: "2",
      name: "Thiết kế giao",
      status: "done",
      date: "29-05-2024",
      timeStart: "09:00",
      timeEnd: "12:00",
      place: "Công ty",
      number_file: 1,
      category: "Work",
    },
    {
      id: "3",
      name: "Dọn phòng",
      status: "pending",
      date: "29-05-2024",
      timeStart: "13:00",
      timeEnd: "13:30",
      place: "Nhà",
      number_file: 3,
      category: "Personal",
    },
    {
      id: "4",
      name: "ITSS",
      status: "done",
      date: "30-05-2024",
      timeStart: "07:00",
      timeEnd: "08:00",
      place: "D9-401",
      number_file: 0,
      category: "Study",
    },
    {
      id: "5",
      name: "AI intro",
      status: "done",
      date: "31-05-2024",
      timeStart: "8:25",
      timeEnd: "10:05",
      place: "D9-401",
      number_file: 2,
      category: "Study",
    },
    {
      id: "6",
      name: "Tiếng Nhật 5",
      status: "done",
      date: "31-05-2024",
      timeStart: "10:15",
      timeEnd: "11:45",
      place: "C7-227",
      number_file: 1,
      category: "Study",
    },
    {
      id: "7",
      name: "UIUX",
      status: "pending",
      date: "31-05-2024",
      timeStart: "19:00",
      timeEnd: "21:00",
      place: "D9-401",
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
