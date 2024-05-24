import { BarGraph } from "@/components/ui/barGraph";
import { useState } from "react";
import ModelTask from "@/components/ui/modelTask";
import { Flex, Progress, Select, Radio, Tooltip } from "antd";
import { setOptions } from "node_modules/react-chartjs-2/dist/utils";
import InfoIcon from "@/assets/icons/info";
type SizeType = {};
// const DemoLiquid = () => {
//   const config = {
//     percent: 0.4,
//     style: {
//       outlineBorder: 4,
//       outlineDistance: 8,
//       waveLength: 128,
//     },

//   };
//   return <Liquid {...config} />;
// };
export default function ReportPage() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [timeDisplay, setTimeDisplay] = useState('week')
  const [size, setSize] = useState<SizeType>('week');
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          boxWidth: 20,
        },
      },
      title: {
        display: false,
        text: "Sơ đồ biểu diễn thời gian hoàn thành task dự kiến và thực tế trong tuần qua",
      },
    },
  };

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Thời gian dự kiến",
        data: labels.map(() => getRandomNumber(0, 24)),
        backgroundColor: "#4EB9EA",
      },
      {
        label: "Thời gian thực tế",
        data: labels.map(() => getRandomNumber(0, 24)),
        backgroundColor: "#116783",
      },
    ],
  };
  const hanleOpenModal = () => {
    setIsModalOpen(true)
  }
  const optionsSelect = [
    { value: 'japanese', label: 'Tiếng Nhật' },
    { value: 'uiux', label: 'Môn UI/UX' },
    { value: 'it', label: 'Môn ITSS' },
  ]
  return (
    <div className="mt-5">
      <div className="flex justify-around flex-row mb-5">
        <Select
          defaultValue='japanese'
          style={{ width: 120 }}
          onChange={handleChange}
          options={optionsSelect}
        />
        <Radio.Group value={size} onChange={(e) => { setTimeDisplay(e.target.value), setSize(e.target.value) }}>
          <Radio.Button value="week">Tuần</Radio.Button>
          <Radio.Button value="month">Tháng</Radio.Button>
        </Radio.Group>
      </div>
      <div>


      </div>
      <div className="flex flex-col gap-[20px] px-[10px]">
        <div className="flex flex-col gap-[20px]">
          <div className="w-full justify-center flex flex-row gap-[20px] items-center">
            <div className="text-blue-500 font-semibold text-2xl">
              Đánh giá
            </div>
              <Tooltip title="KPI = (Hoàn thành nhiệm vụ / Tổng số nhiệm vụ) * 60 + (Tổng số giờ làm việc / Số giờ làm việc tiêu chuẩn) * 40">
                <div>
                <InfoIcon />
                </div>
              </Tooltip>
          </div>

          <div className="w-full flex justify-center items-center my-[20px]">
            <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full" onClick={hanleOpenModal}>
              <Flex align="center" justify="center" wrap gap={30} >
                <Progress type="circle" size={150} percent={83.4} />
              </Flex>
            </div>
            <ModelTask isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          </div>
        </div>


        <div className=" flex flex-col justify-center items-center">
          <p className="text-blue-500 font-semibold text-2xl">Hiệu suất</p>
          <BarGraph options={options} data={data} />
        </div>
        <div className="flex flex-col gap-[20px] mb-[20px]">
          <div className="flex w-full justify-center text-blue-500 font-semibold text-2xl">Thông tin chi tiết</div>
          <div className="flex flex-col gap-[10px] px-[10px]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-[10px]">
                <div>Tổng số task:</div>
                <div>Số task chưa hoàn thành:</div>
                <div>Số giờ thực tế đã làm:</div>
                <div>Số giờ đã đề ra</div>
                <div>Task có hiệu suất nhanh nhất:</div>
                <div>Task hoàn thành muộn nhất: </div>
                <div>Số task muộn</div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div>20</div>
                <div>10</div>
                <div>40</div>
                <div>30</div>
                <div>Ngữ pháp</div>
                <div>Đọc hiểu</div>
                <div>2</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
