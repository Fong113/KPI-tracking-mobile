import HomePage from "@/pages/HomePage";
import { Route, Routes, Navigate } from 'react-router-dom'
import MainLayout from "@/components/layout/MainLayout";
import ReportPage from "@/pages/ReportPage";
import TodoPage from "@/pages/TodoPage";
import Personal from "@/pages/Personal";
import SettingPage from "@/pages/SettingPage";
import TreePage from "@/pages/TreePage";
import TaskInfo from "@/components/task/infoTask";
import AddTaskPage from "@/pages/AddTaskPage";
import CommentPage from "@/pages/CommentPage";
import Login from "@/components/auth/login";
import Signup from "@/components/auth/signup";

export default function AllRouter(){
  return (
    <Routes>
    <Route path="/" element={<Navigate to={'/login'} />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/home" element={<MainLayout children={<HomePage />} />} />
    <Route path="/report" element={<MainLayout children={<ReportPage />} />} />
    <Route path="/todo" element={<MainLayout children={<TodoPage />} />} />
    <Route path="/personal" element={<MainLayout children={<Personal />} />} />
    <Route path="/setting" element={<MainLayout children={<SettingPage />} />} />
    <Route path="/tree" element={<MainLayout children={<TreePage />} />} />
    <Route path="/info-task/:id" element={<MainLayout children={<TaskInfo />} />} />
    <Route path="/add-task" element={<MainLayout children={<AddTaskPage />} />} />
    <Route path="/help" element={<MainLayout children={<CommentPage />} />} />
    
    </Routes>
  )
}