import Header from "./Header";
import { useState } from "react";
import BotBar from "./TabBar"
import './mainlayout.css'
import AddKPIModal from "../modal-add-kpi";
import { FloatButton,  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faLayerGroup, faPlus } from '@fortawesome/free-solid-svg-icons';
type Prop = {
  children: any;
}
import { useNavigate } from "react-router-dom";

export default function MainLayout({ children }: Prop) {
  const [open, setOpen] = useState(false);

  const addKPI = () => {
    setOpen(true);
  }

  const navigate = useNavigate()
  const handleAddTask = () => {
    navigate('/add-task')
  }
  return (
    <div className="containerCustom">
      <div className="header-bar "><Header /></div>
      <div className="content">
        <FloatButton.Group
          trigger="click"
          type="default"
          style={{ right: 20, bottom: 70, scale: 2 }}
          icon={<FontAwesomeIcon icon={faPlus} />}
        >
          <FloatButton tooltip={"Thêm KPI"} onClick={addKPI} icon={<FontAwesomeIcon icon={faLayerGroup} />} />
          <FloatButton tooltip={"Thêm nhiệm vụ"} onClick={handleAddTask} icon={<FontAwesomeIcon icon={faFile} />} />
        </FloatButton.Group>
        <AddKPIModal open={open} setOpen={setOpen} />
        {children}
      </div>
      <div className="bottom-bar shadow-sm"><BotBar /></div>
    </div>
  )
}