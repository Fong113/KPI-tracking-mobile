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
  timeDone?: string
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
      name: "ML",
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
      spech: {
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
      "id": "1",
      "name": "Học tiếng Nhật - Bài 1",
      "status": "done",
      "date": "01/06/2024",
      "timeStart": "09:00",
      "timeEnd": "10:30",
      "place": "Nhà riêng",
      "number_file": 1,
      "category": "Tiếng Nhật",
      "description": "Học từ vựng và ngữ pháp"
    },
    {
      "id": "2",
      "name": "Học tiếng Nhật - Bài 2",
      "status": "done",
      "date": "03/06/2024",
      "timeStart": "10:00",
      "timeEnd": "11:30",
      "place": "Thư viện",
      "number_file": 1,
      "category": "Tiếng Nhật",
      "description": "Luyện nghe và nói"
    },
    {
      "id": "3",
      "name": "Học tiếng nhật 6",
      "status": "done",
      "date": "07/06/2024",
      "timeStart": "10:15",
      "timeEnd": "11:45",
      "place": "Nhà riêng",
      "number_file": 1,
      "category": "Tiếng Nhật",
      "description": "Luyện đọc và viết"
    },
    {
      "id": "4",
      "name": "Học tiếng Nhật - Bài 4",
      "status": "done",
      "date": "03/06/2024",
      "timeStart": "16:00",
      "timeEnd": "18:00",
      "place": "Thư viện",
      "number_file": 2,
      "category": "Tiếng Nhật",
      "description": "Ôn tập đề cương thi"
    },
    {
      "id": "5",
      "name": "Báo cáo UI-UX",
      "status": "pending",
      "date": "07/06/2024",
      "timeStart": "14:10",
      "timeEnd": "17:30",
      "place": "Văn phòng",
      "number_file": 3,
      "category": "UI/UX",
      "description": "Làm bài tập về wireframing"
    },
    {
      "id": "6",
      "name": "Thiết kế UI/UX - Bài 2",
      "status": "done",
      "date": "04/06/2024",
      "timeStart": "09:00",
      "timeEnd": "11:00",
      "place": "Nhà riêng",
      "number_file": 2,
      "category": "UI/UX",
      "description": "Thiết kế mockup cho dự án"
    },
    {
      "id": "7",
      "name": "Thiết kế UI/UX - Bài 3",
      "status": "pending",
      "date": "06/06/2024",
      "timeStart": "13:00",
      "timeEnd": "15:00",
      "place": "Văn phòng",
      "number_file": 3,
      "category": "UI/UX",
      "description": "Thảo luận và feedback thiết kế"
    },
    {
      "id": "8",
      "name": "Thiết kế UI/UX - Bài 4",
      "status": "done",
      "date": "08/06/2024",
      "timeStart": "10:00",
      "timeEnd": "12:00",
      "place": "Nhà riêng",
      "number_file": 3,
      "category": "UI/UX",
      "description": "Học về thiết kế trải nghiệm người dùng"
    },
    {
      "id": "9",
      "name": "Học TTNT - Bài 1",
      "status": "done",
      "date": "03/06/2024",
      "timeStart": "08:00",
      "timeEnd": "10:00",
      "place": "Nhà riêng",
      "number_file": 1,
      "category": "TTNT",
      "description": "Làm bài tập về thuật toán"
    },
    {
      "id": "10",
      "name": "Học TTNT - Bài 2",
      "status": "done",
      "date": "05/06/2024",
      "timeStart": "09:00",
      "timeEnd": "11:00",
      "place": "Thư viện",
      "number_file": 2,
      "category": "TTNT",
      "description": "Thực hành lập trình AI"
    },
    {
      "id": "11",
      "name": "Báo cáo project AI",
      "status": "pending",
      "date": "07/06/2024",
      "timeStart": "8:25",
      "timeEnd": "10:05",
      "place": "Văn phòng",
      "number_file": 3,
      "category": "TTNT",
      "description": "Thảo luận về dự án AI"
    },
    {
      "id": "12",
      "name": "Học TTNT - Bài 4",
      "status": "done",
      "date": "09/06/2024",
      "timeStart": "10:00",
      "timeEnd": "12:00",
      "place": "Nhà riêng",
      "number_file": 2,
      "category": "TTNT",
      "description": "Làm bài tập về machine learning"
    },
    {
      "id": "13",
      "name": "Học ML - Bài 1",
      "status": "done",
      "date": "04/06/2024",
      "timeStart": "08:00",
      "timeEnd": "10:00",
      "place": "Nhà riêng",
      "number_file": 1,
      "category": "ML",
      "description": "Làm bài tập về supervised learning"
    },
    {
      "id": "14",
      "name": "Học ML - Bài 2",
      "status": "done",
      "date": "06/06/2024",
      "timeStart": "09:00",
      "timeEnd": "11:00",
      "place": "Thư viện",
      "number_file": 2,
      "category": "ML",
      "description": "Thực hành với scikit-learn"
    },
    {
      "id": "15",
      "name": "Học ML - Bài 3",
      "status": "pending",
      "date": "08/06/2024",
      "timeStart": "14:00",
      "timeEnd": "16:00",
      "place": "Văn phòng",
      "number_file": 3,
      "category": "ML",
      "description": "Thảo luận về dự án ML"
    },
    {
      "id": "16",
      "name": "Học ML - Bài 4",
      "status": "done",
      "date": "10/06/2024",
      "timeStart": "10:00",
      "timeEnd": "12:00",
      "place": "Nhà riêng",
      "number_file": 2,
      "category": "ML",
      "description": "Làm bài tập về neural networks"
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
