import {  TimePicker, Select, Form, Input, Dropdown, Space, Popconfirm, DatePicker } from "antd";
import dayjs from 'dayjs';
import BellIcon from "@/assets/icons/bell";
import DownIcon from "@/assets/icons/down";
import { Textarea } from "../ui/textarea";
import { toast } from "react-toastify";
import { useTaskContext } from "@/contexts/taskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import type { MenuProps } from 'antd';
import { QuestionCircleOutlined } from "@ant-design/icons";
import CalcTimeDone from "@/utils/CalcTimeDone";
const dateFormat = 'DD/MM/YYYY';
import { Button } from "../ui/button";
const optionsSelect = [
  { value: 'done', label: 'Đã hoàn thành' },
  { value: 'pending', label: 'Chưa hoàn thành' },
];

const format = 'HH:mm';

export default function TaskInfo() {

  const [form] = Form.useForm();
  const [selectedTask, setSelectedTask] = useState<any>();
  const [showDone, setShowDone] = useState<boolean>()
  const navigate = useNavigate();
  const { id } = useParams();
  const { allTask, updateTask, setAllTask } = useTaskContext();

  useEffect(() => {
    const task = allTask.find(item => item.id === id);
    setSelectedTask(task);
    if (task) {
      setShowDone(task.status === 'done')
      form.setFieldsValue({
        title: task.name,
        place: task.place,
        time: [dayjs(task.timeStart, format), dayjs(task.timeEnd, format)],
        status: task.status,
        description: task.description,
        date: dayjs(task.date, dateFormat),
        timeDone: task.timeDone || CalcTimeDone(task.timeStart, task.timeEnd)
      });
    }
  }, [id, allTask, form, selectedTask]);


  const confirm = () => {
    const deleteTask = allTask.filter(item => item.id !== id)
    setAllTask(deleteTask)
    toast.success("Xóa thành công")
    navigate("/todo")
  }
  const handleChangeStatus = (e:any) => {
    // console.log(e);
    setShowDone(e.toString() === 'done')
    
  }

  const handlesubmit = (values: any) => {
    // console.log(values);
    
    const updatedTask = { ...selectedTask, ...values,date: values.date.format(dateFormat), timeStart: values.time[0].format(format), timeEnd: values.time[1].format(format) };

    updateTask(updatedTask);
    toast.success("Lưu thay đổi thành công");
    navigate('/todo');
  };

  const items: MenuProps['items'] = [
    // {
    //   key: '1',
    //   // danger: true,
    //   label: 'Lưu trữ ( đang pt)',
    // },
    {
      key: '2',
      danger: true,
      label: (
        <div >
          <Popconfirm
            title="Xóa Nhiệm Vụ"
            description="Bạn có chắc chắn chưa?"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            onConfirm={confirm}
          >
            Xóa nhiệm vụ
          </Popconfirm>
        </div>
      ),
    },
  ];


  return (
    <div>
      <div className="flex flex-row justify-between">
        <span className="text-blue-500 ml-5 text-2xl font-semibold">Thông tin nhiệm vụ</span>
        <span className="pr-5"><Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </Space>
          </a>
        </Dropdown></span>
      </div>
      <div className="p-5 flex flex-col gap-5">
        <Form form={form} layout="vertical" onFinish={handlesubmit}>
          <Form.Item name="title" label="Tiêu đề" rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="place" label="Địa điểm">
            <Input />
          </Form.Item >
          <Form.Item name="date" label="Ngày">
            {/* <RangePicker
              
              format={dateFormat}
            /> */}
            <DatePicker format={dateFormat} />
          </Form.Item >
          <Form.Item className="flex flex-col gap-3" name="time" label="Thời gian" rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}>
            <TimePicker.RangePicker className="w-full" format={format} />

          </Form.Item>
          <Form.Item name={'alert'} label="Thông báo" >
            <div className="flex flex-row gap-[13px] items-center" >
              <BellIcon />
              <DownIcon />
              <div className="text-black text-xl font-normal">Trước 30 phút</div>
            </div>

          </Form.Item>

          <Form.Item name="status" label="Trạng thái">
            <Select style={{ width: 170 }} onChange={handleChangeStatus} options={optionsSelect} />
          </Form.Item>
          { showDone && <Form.Item name="timeDone" label="Thời gian hoàn thành">
            <Input  />
          </Form.Item> }
          
          <Form.Item name="description" label="Ghi chú">
            <Textarea className="w-full" />
          </Form.Item>
          <Form.Item className="items-center justify-center text-white flex">
            <Button type="submit" className="bg-blue-500" ><span className="text-xl">Lưu thay đổi</span></Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
