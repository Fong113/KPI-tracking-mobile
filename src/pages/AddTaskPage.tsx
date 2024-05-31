import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Modal, Select, TimePicker } from "antd";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

// const { RangePicker } = DatePicker;

// const dateFormat = 'DD/MM/YYYY';

const format = 'HH:mm';

export default function AddTaskPage() {
    const navigate = useNavigate()

    const [open, setOpen] = useState(false);

    const handleSubmit = () => {
        toast.success("Lưu thành công");
        navigate('/todo')
    };

    const addKPI = () => {
        setOpen(true);
    }

    const handleCloseModal = () => {
        setOpen(false);
    }

    return (
        <div className="w-full flex flex-col gap-[20px] px-[20px]">
            <div className="text-blue-500 font-semibold text-2xl flex gap-[20px] flex-row justify-center w-full">Tạo task</div>
            <div className="flex flex-col gap-[12px]">
                <div className="flex flex-col items-start gap-[10px]">
                    <div>Tên Nhiệm vụ</div>
                    <Input placeholder="Nhập tên của task" height={30} />
                </div>
                <div className="flex flex-col items-start gap-[10px]">
                    <div>Mô tả nội dung </div>
                    <Input placeholder="Nhập tên của task" height={30} />
                </div>
                <div className="flex flex-col items-start gap-[10px]">
                    <div>Ngày thực hiện</div>
                    <DatePicker placeholder="" height={30} />
                </div>
                <div className="flex flex-col items-start gap-[10px]">
                    <span className="">Thời gian</span>
                    <div className="w-full">
                        <TimePicker.RangePicker className=" w-full "  format={format} />
                    </div>
                </div>
                <div className="flex flex-col items-start gap-[10px]">
                    <div>Số giờ làm việc dự kiến</div>
                    <Input placeholder="Nhập số giờ làm việc dự kiến" height={30} />
                </div>
                <div className="w-full flex flex-col items-start gap-[10px]">
                    <div className="flex flex-row w-full justify-between">
                        <div>KPI</div>
                        <PlusOutlined className="rounded-full px-[4px] bg-blue-200" onClick={addKPI} />
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
                    </div>
                    <Select placeholder="Chọn KPI cho nhiệm vụ" className="w-full">
                        <Select.Option value="IT">IT</Select.Option>
                        <Select.Option value="IT">UX-UI</Select.Option>
                        <Select.Option value="IT">Tiếng Nhật</Select.Option>
                    </Select>
                </div>

            </div>
            <Button onClick={handleSubmit} type="primary">Lưu nhiệm vụ</Button>
        </div>
    )
}