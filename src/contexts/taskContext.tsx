import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Category {
  id: string;
  name: string;
  status: string;
  dateStart: string;
  dateEnd: string;
  progress: string;
  spech: {}
}

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
  description: string
}

interface TaskContextProps {
  allTask: Task[];
  setAllTask: React.Dispatch<React.SetStateAction<Task[]>>;
  allCategory: Category[];
  setAllCategory: React.Dispatch<React.SetStateAction<Category[]>>;
  updateTask: (updatedTask: Task) => void
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {

  const updateTask = (updatedTask: Task) => {
    const updatedTasks = allTask.map(task => task.id === updatedTask.id ? updatedTask : task);
    setAllTask(updatedTasks)
  }
  const [allCategory, setAllCategory] = useState<Category[]>([
    {
      id: "1",
      name: "Tiếng Nhật",
      status: "active",
      dateStart: "01/06/2024",
      dateEnd: "30/06/2024",
      progress: '78.78',
      spech: {
        totalTasks: 20,
        unfinishedTasks: 10,
        actualHoursWorked: 40,
        plannedHours: 30,
        fastestTask: "Ngữ pháp",
        latestTask: "Đọc hiểu",
        lateTasksCount: 2
      },
    },
    {
      id: "2",
      name: "UI/UX",
      status: "active",
      dateStart: "05/06/2024",
      dateEnd: "25/06/2024",
      progress: '91.67',
      spech: {
        totalTasks: 15,
        unfinishedTasks: 5,
        actualHoursWorked: 35,
        plannedHours: 25,
        fastestTask: "Viết báo cáo",
        latestTask: "Kiểm thử",
        lateTasksCount: 1
      },
    },
    {
      id: "3",
      name: "Học Máy",
      status: "inactive",
      dateStart: "01/05/2024",
      dateEnd: "31/05/2024",
      progress: '69.69',
      spech: {
        totalTasks: 25,
        unfinishedTasks: 8,
        actualHoursWorked: 45,
        plannedHours: 35,
        fastestTask: "Lập kế hoạch",
        latestTask: "Phân tích yêu cầu",
        lateTasksCount: 3
      },

    },
    {
      id: "4",
      name: "TTNT",
      status: "active",
      dateStart: "15/05/2024",
      progress: '82.28',
      dateEnd: "15/07/2024",
      spech:  {
        totalTasks: 18,
        unfinishedTasks: 7,
        actualHoursWorked: 38,
        plannedHours: 28,
        fastestTask: "Thiết kế giao diện",
        latestTask: "Kiểm định sản phẩm",
        lateTasksCount: 2
      },
    },
  ]);
  const [allTask, setAllTask] = useState<Task[]>([
    {
      id: "1",
      name: "Học tiếng Anh",
      status: "pending",
      date: "01/06/2024",
      timeStart: "09:00",
      timeEnd: "10:30",
      place: "Nhà riêng",
      number_file: 1,
      category: "Study",
      description: "Học từ vựng và ngữ pháp"
    },
    {
      id: "2",
      name: "Lập trình React",
      status: "done",
      date: "02/06/2024",
      timeStart: "14:00",
      timeEnd: "16:00",
      place: "Văn phòng",
      number_file: 3,
      category: "Work",
      description: "Làm bài tập và dự án"
    },
    {
      id: "3",
      name: "Chạy bộ",
      status: "pending",
      date: "03/06/2024",
      timeStart: "06:00",
      timeEnd: "07:00",
      place: "Công viên",
      number_file: 0,
      category: "Exercise",
      description: "Chạy bộ 5km"
    },
    {
      id: "4",
      name: "Đọc sách",
      status: "done",
      date: "04/06/2024",
      timeStart: "19:00",
      timeEnd: "20:00",
      place: "Nhà riêng",
      number_file: 1,
      category: "Leisure",
      description: "Đọc sách 'Atomic Habits'"
    },
    {
      id: "5",
      name: "Học lập trình Python",
      status: "pending",
      date: "05/06/2024",
      timeStart: "10:00",
      timeEnd: "12:00",
      place: "Nhà riêng",
      number_file: 2,
      category: "Study",
      description: "Làm bài tập Python cơ bản"
    },
    {
      id: "6",
      name: "Đi chợ",
      status: "done",
      date: "06/06/2024",
      timeStart: "08:00",
      timeEnd: "09:00",
      place: "Siêu thị",
      number_file: 0,
      category: "Personal",
      description: "Mua thực phẩm cho tuần"
    },
    {
      id: "7",
      name: "Họp nhóm dự án",
      status: "pending",
      date: "07/06/2024",
      timeStart: "13:00",
      timeEnd: "15:00",
      place: "Văn phòng",
      number_file: 3,
      category: "Work",
      description: "Thảo luận tiến độ dự án"
    },
    {
      id: "8",
      name: "Học toán cao cấp",
      status: "done",
      date: "08/06/2024",
      timeStart: "16:00",
      timeEnd: "18:00",
      place: "Thư viện",
      number_file: 2,
      category: "Study",
      description: "Ôn tập đề cương thi"
    },
    {
      id: "9",
      name: "Làm vườn",
      status: "pending",
      date: "09/06/2024",
      timeStart: "07:00",
      timeEnd: "08:30",
      place: "Nhà riêng",
      number_file: 0,
      category: "Leisure",
      description: "Chăm sóc cây cối"
    },
    {
      id: "10",
      name: "Tham gia khóa học online",
      status: "done",
      date: "10/06/2024",
      timeStart: "18:00",
      timeEnd: "20:00",
      place: "Nhà riêng",
      number_file: 4,
      category: "Study",
      description: "Khóa học về phát triển bản thân"
    },
    {
      id: "11",
      name: "Đi bộ",
      status: "pending",
      date: "11/06/2024",
      timeStart: "05:00",
      timeEnd: "06:00",
      place: "Công viên",
      number_file: 0,
      category: "Exercise",
      description: "Đi bộ 3km"
    },
    {
      id: "12",
      name: "Nấu ăn",
      status: "done",
      date: "12/06/2024",
      timeStart: "17:00",
      timeEnd: "18:30",
      place: "Nhà bếp",
      number_file: 1,
      category: "Personal",
      description: "Nấu bữa tối cho gia đình"
    },
    {
      id: "13",
      name: "Thiền",
      status: "pending",
      date: "13/06/2024",
      timeStart: "20:00",
      timeEnd: "20:30",
      place: "Nhà riêng",
      number_file: 0,
      category: "Leisure",
      description: "Thư giãn và tập trung tâm trí"
    },
    {
      id: "14",
      name: "Học tiếng Pháp",
      status: "done",
      date: "14/06/2024",
      timeStart: "15:00",
      timeEnd: "16:30",
      place: "Nhà riêng",
      number_file: 2,
      category: "Study",
      description: "Học từ vựng và ngữ pháp"
    },
    {
      id: "15",
      name: "Lập trình Java",
      status: "pending",
      date: "15/06/2024",
      timeStart: "10:00",
      timeEnd: "12:00",
      place: "Thư viện",
      number_file: 3,
      category: "Work",
      description: "Làm bài tập và dự án"
    },
    {
      id: "16",
      name: "Yoga",
      status: "done",
      date: "16/06/2024",
      timeStart: "06:00",
      timeEnd: "07:00",
      place: "Nhà riêng",
      number_file: 0,
      category: "Exercise",
      description: "Tập yoga buổi sáng"
    },
    {
      id: "17",
      name: "Đọc báo",
      status: "pending",
      date: "17/06/2024",
      timeStart: "08:00",
      timeEnd: "09:00",
      place: "Nhà riêng",
      number_file: 1,
      category: "Leisure",
      description: "Đọc báo hàng ngày"
    },
    {
      id: "18",
      name: "Tham gia hội thảo",
      status: "done",
      date: "05/06/2024",
      timeStart: "14:00",
      timeEnd: "17:00",
      place: "Văn phòng",
      number_file: 2,
      category: "Work",
      description: "Hội thảo về công nghệ"
    },
    {
      id: "19",
      name: "Đi câu cá",
      status: "pending",
      date: "05/06/2024",
      timeStart: "05:00",
      timeEnd: "10:00",
      place: "Hồ câu",
      number_file: 0,
      category: "Leisure",
      description: "Thư giãn và câu cá"
    },
    {
      id: "20",
      name: "Học lập trình JavaScript",
      status: "done",
      date: "20/06/2024",
      timeStart: "10:00",
      timeEnd: "12:00",
      place: "Nhà riêng",
      number_file: 3,
      category: "Study",
      description: "Làm bài tập JavaScript"
    }
  ]);

  return (
    <TaskContext.Provider value={{ allCategory, setAllCategory, allTask, setAllTask, updateTask }}>
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
