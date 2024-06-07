import { PlusOutlined } from "@ant-design/icons";
import {
  DatePicker,
  Form,
  Input,
  Select,
  TimePicker,
} from "antd";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useTaskContext } from "@/contexts/taskContext";
import { Textarea } from "@/components/ui/textarea";
import AddKPIModal from "@/components/modal-add-kpi";

dayjs.extend(customParseFormat);

const { RangePicker } = TimePicker;
const dateFormat = "DD/MM/YYYY";
const timeFormat = "HH:mm";

export default function AddTaskPage() {
  const navigate = useNavigate();
  const { setAllTask, allTask, allCategory } = useTaskContext();
  const [open, setOpen] = useState(false);
  const optionsSelect = allCategory.map(category => ({ value: category.name, label: category.name }))

  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    const newTask = {
      id: (allTask.length + 1).toString(), // generate a new ID
      name: values.taskName,
      status: "pending", // default status
      date: values.date.format(dateFormat),
      timeStart: values.timeRange[0].format(timeFormat),
      timeEnd: values.timeRange[1].format(timeFormat),
      place: "Nhà riêng", // default place
      number_file: 0, // default number of files
      category: values.kpi,
      description: values.description,
    };

    setAllTask([...allTask, newTask]);
    toast.success("Thêm nhiệm vụ thành công");
    navigate("/todo");
  };

  const addKPI = () => {
    setOpen(true);
  };

//   const handleCloseModal = () => {
//     setOpen(false);
//   };

  return (
    <div className="w-full flex flex-col gap-[20px] px-[20px]">
      <div className="text-blue-500 font-semibold text-2xl flex gap-[20px] flex-row justify-center w-full">
        Tạo Nhiệm vụ
      </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="flex flex-col "
      >
        <Form.Item
          name="taskName"
          label="Tên Nhiệm vụ"
          rules={[{ required: true, message: "Vui lòng nhập tên của task" }]}
        >
          <Input placeholder="Nhập tên của task" />
        </Form.Item>

        <Form.Item
          name="date"
          label="Ngày thực hiện"
          rules={[{ required: true, message: "Vui lòng chọn ngày thực hiện" }]}
        >
          <DatePicker inputReadOnly format={dateFormat} />
        </Form.Item>
        <Form.Item
          name="timeRange"
          label="Thời gian"
          rules={[{ required: true, message: "Vui lòng chọn thời gian" }]}
        >
          <RangePicker inputReadOnly format={timeFormat} />
        </Form.Item>
        <Form.Item
          name="kpi"
          className="label-form"
          label={
            <div className="flex flex-row item items-center justify-between w-full">
              <span>KPI</span>
              <Button className="w-25 h-7"  onClick={addKPI}>
              <PlusOutlined />
              </Button>
            </div>
          }
          rules={[
            { required: true, message: "Vui lòng chọn KPI cho nhiệm vụ" },
          ]}
        >
          <Select placeholder="Chọn KPI cho nhiệm vụ" options={optionsSelect}>
            
          </Select>
        </Form.Item>

        <AddKPIModal open={open} setOpen={setOpen} />
        <Form.Item
          name="description"
          label="Ghi chú"
          // rules={[{ required: true, message: "Vui lòng nhập mô tả, ghi chú" }]}
        >
          <Textarea className="w-full" />
        </Form.Item>
        <Form.Item className="flex justify-center items-center">
          <Button
            type="submit"
            className="items-center flex p-2 text-xl text-white bg-blue-500"
          >
            Lưu nhiệm vụ
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
