import Header from "./Header";
import { useState } from "react";
import BotBar from "./TabBar"
import './mainlayout.css'
import { FloatButton, Modal, Input, DatePicker, Button } from 'antd';
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

  const handleCloseModal = () => {
    setOpen(false);
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
        <Modal
          open={open}
          width={300}
          footer={null}
          centered
          onCancel={handleCloseModal}
          className="flex flex-col gap-[20px]"
        >
          <div className="flex flex-col mt-[30px] my-[20px] gap-[20px]">
            <div className="flex flex-col gap-2">
              <span className="text-xl font-medium">Tên KPI</span>
              <Input placeholder="Nhập tên KPI" />
            </div>
            <div className="flex flex-row gap-3">
              <div>
                <DatePicker placeholder="Bắt đầu" />
              </div>
              <div>
                <DatePicker placeholder="Kết thúc" />
              </div>

            </div>

            <Button type="primary" onClick={handleCloseModal}>Thêm KPI</Button>
          </div>

        </Modal>
        {children}
      </div>
      <div className="bottom-bar shadow-sm"><BotBar /></div>
    </div>
  )
}