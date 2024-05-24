import BackIcon from "@/assets/icons/back";
import BellIcon from "@/assets/icons/bell";
import DownIcon from "@/assets/icons/down";
import { TASKS } from "@/utils/constants/mockData";
import { DatePicker, DatePickerProps, Form, TimePicker } from "antd";
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

dayjs.extend(customParseFormat);

type Props = {
  id?: string;
}

const { RangePicker } = DatePicker;

type RangeValue = [Dayjs | null, Dayjs | null] | null;

export default function AddEditTaskPage({
  id
}: Props) {

  const form = useForm();

  const filteredTasks = Object.values(TASKS).flat().filter(task => task.id == id);
  const [status, setStatus] = useState('');
  const [value, setValue] = useState<RangeValue>(null);
  console.log(filteredTasks);

  const handleRadioChange = (event) => {
    setStatus(event.target.value);
    console.log(status);
  };

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };


  const disabledDate: DatePickerProps['disabledDate'] = (current, { from }) => {
    if (from) {
      return Math.abs(current.diff(from, 'days')) >= 7;
    }
    return false;
  };

  const onSubmit = (data: any) => {
    console.log("data", data);
    location.href = '/task';
  }

  const handleBack = () => {
    location.href = '/todo';
  }
  return (
    <Form
      {...form}
    >
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={`flex flex-col ${id ? "gap-[30px]" : "gap-[54px]"} p-4 md:p-8`}>
          <div className="flex flex-col gap-[39px]">
            <div className="flex flex-row gap-[27px] items-start">
              <div onClick={handleBack}><BackIcon /></div>
              {id ?
                <p className="text-blue-500 text-2xl md:text-4xl font-semibold">Chỉnh sửa nhiệm vụ</p> :
                <p className="text-blue-500 text-2xl md:text-4xl font-semibold">Tạo mới nhiệm vụ</p>
              }
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-[40px] px-0 md:px-[54px] items-start">
              <div className="flex flex-col gap-[27px] w-full md:w-2/5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col md:flex-row items-start justify-between gap-[10px] md:gap-[30px]">
                        <Label className="text-gray-800 text-[16px] md:text-[20px] font-normal">Tiêu đề</Label>
                        <Input
                          defaultValue={id ? filteredTasks[0]?.name : "Học từ vựng tiếng nhật từ 800-850"}
                          className="px-[12px] w-full md:w-[260px]"
                          {...field}
                        />
                      </div>
                    </FormItem>
                  )} />

                <FormField
                  control={form.control}
                  name="place"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col md:flex-row items-start justify-between gap-[10px] md:gap-[50px]">
                        <Label className="text-gray-800 text-[16px] md:text-[20px] font-normal">Địa điểm</Label>
                        <Input
                          defaultValue={id ? filteredTasks[0]?.place : "Tự học"}
                          className="px-[12px] w-full md:w-[260px]"
                          {...field}
                        />
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col gap-[27px] w-full">
                <div className="flex flex-col md:flex-row justify-between gap-[10px] md:gap-[30px] items-start h-[42px]">
                  <Label className="text-gray-800 text-[16px] md:text-[20px] font-normal">Ngày: </Label>
                  {/* <RangePicker
                    className="h-full w-full md:w-auto bg-[#FAFAFA]"
                    value={value}
                    disabledDate={disabledDate}
                    onChange={setValue}
                    style={{
                      border: '1px solid rgba(0, 0, 0, 0.40)'
                    }}
                  /> */}
                  <Input
                    defaultValue={id ? filteredTasks[0]?.name : "24-5-2024"}
                    className="px-[12px] w-full md:w-[260px]"
                  />

                </div>

                <FormField
                  control={form.control}
                  name="place"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col md:flex-row justify-between gap-[10px] md:gap-[30px] mb-10 items-start h-[42px]">
                        <Label className="text-gray-800 text-[16px] md:text-[20px] font-normal">Thời gian: </Label>
                        <Input
                          defaultValue={id ? filteredTasks[0]?.name : "20:00 - 22:00"}
                          className="px-[12px] w-full md:w-[260px]"
                        />
                      </div>
                    </FormItem>
                  )}
                />

              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[36.5px] px-0 md:px-[54px]">
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col md:flex-row gap-[20px] md:gap-[56px] items-start">
                <FormField
                  control={form.control}
                  name="required"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-row gap-[18px] items-start">
                        <Input
                          className="w-[30px] rounded-full h-[30px]"
                          type="checkbox"
                          defaultChecked={true}
                          {...field}
                        />
                        <div className="text-lg md:text-2xl font-normal">Tính KPI</div>
                      </div>
                    </FormItem>
                  )}
                />

                <div className="flex flex-row gap-[13px] items-start">
                  <BellIcon />
                  <DownIcon />
                  <div className="text-gray-800 text-lg md:text-[24px] font-normal">Trước 30 phút</div>
                </div>
              </div>

              {id && <div className="flex flex-col md:flex-row gap-[10px] md:gap-[27px] items-start">
                <FormField
                  control={form.control}
                  name="status"
                  onChange={handleRadioChange}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-row gap-[14px]">
                        <div className="flex flex-row gap-[14px] items-start">
                          <Input
                            type="radio"
                            value="2"
                            className="rounded-full w-[30px] h-[30px]"
                            defaultChecked={filteredTasks[0].status == "2"}
                            {...field}
                          />
                          <div className="text-lg md:text-xl font-normal">Đã hoàn thành</div>
                        </div>

                        <div className="flex flex-row gap-[14px] items-start">
                          <Input
                            type="radio"
                            value="1"
                            className="rounded-full w-[30px] h-[30px]"
                            defaultChecked={filteredTasks[0].status == "1"}
                            {...field}
                          />
                          <div className="text-lg md:text-xl font-normal">Chưa hoàn thành</div>
                        </div>
                      </div>
                    </FormItem>
                  )} />

                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <Input
                        className="w-full md:w-[358px]"
                        {...field}
                        placeholder={status == "1" ? "Số % công việc hoàn thành" : "Số giờ hoàn thành công việc"}
                        defaultValue={status == "1" ? filteredTasks[0].percent_work : filteredTasks[0].time_completed}
                      />
                    </FormItem>
                  )}
                />
              </div>}
            </div>

            <div className={`flex flex-col ${!id ? "gap-[32px]" : "gap-[27px]"}`}>
              <Textarea className="w-full" placeholder="Ghi chú" />
              <div className="flex flex-col md:flex-row w-full justify-start items-start gap-[20px] md:gap-[122px]">
                {/* <Button variant="destructive" className="text-white text-lg md:text-2xl font-normal">Hủy</Button> */}
                <Button type="submit" variant="submit" className="text-white text-lg md:text-2xl self-end font-normal">Lưu thông tin</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}
