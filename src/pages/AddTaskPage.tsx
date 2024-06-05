import { PlusOutlined } from "@ant-design/icons";
import {
    Button,
    DatePicker,
    Form,
    Input,
    Modal,
    Select,
    TimePicker,
} from "antd";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useTaskContext } from "@/contexts/taskContext";
import { Textarea } from "@/components/ui/textarea";

dayjs.extend(customParseFormat);

const { RangePicker } = TimePicker;
const dateFormat = "DD/MM/YYYY";
const timeFormat = "HH:mm";

export default function AddTaskPage() {
    const navigate = useNavigate();
    const { setAllTask, allTask } = useTaskContext();
    const [open, setOpen] = useState(false);

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

    const handleCloseModal = () => {
        setOpen(false);
    };

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
                    <DatePicker format={dateFormat} />
                </Form.Item>
                <Form.Item
                    name="timeRange"
                    label="Thời gian"
                    rules={[{ required: true, message: "Vui lòng chọn thời gian" }]}
                >
                    <RangePicker format={timeFormat} />
                </Form.Item>
                <Form.Item
                    name="kpi"
                    className="label-form"
                    label={<div className="flex flex-row justify-between w-full">
                        <span>KPI</span>
                        <Button onClick={addKPI} icon={<PlusOutlined />}>
                            Thêm KPI
                        </Button>
                    </div>}
                    rules={[
                        { required: true, message: "Vui lòng chọn KPI cho nhiệm vụ" },
                    ]}
                >
                    <Select placeholder="Chọn KPI cho nhiệm vụ">
                        <Select.Option value="IT">IT</Select.Option>
                        <Select.Option value="UX-UI">UX-UI</Select.Option>
                        <Select.Option value="Japanese">Tiếng Nhật</Select.Option>
                    </Select>
                </Form.Item>


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
                        <Button type="primary" onClick={handleCloseModal}>
                            Thêm KPI
                        </Button>
                    </div>
                </Modal>
                <Form.Item
                    name="description"
                    label="Ghi chú"
                    // rules={[{ required: true, message: "Vui lòng nhập mô tả, ghi chú" }]}
                >
                    <Textarea className="w-full" placeholder="Ghi chú" />
                </Form.Item>
                <Form.Item className="flex justify-center items-center">
                    <Button type="primary" htmlType="submit" className="items-center flex p-2">
                        <span  className="text-xl">Lưu nhiệm vụ</span>
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
