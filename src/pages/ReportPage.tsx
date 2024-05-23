import { BarGraph } from "@/components/ui/barGraph";
// import { Liquid } from '@ant-design/plots';
import { Flex, Progress } from "antd";
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

  return (
    <div>
      report nè
      <div className="flex flex-col gap-10">
        <div className="h-[30vh] w-full flex flex-col justify-center items-center">
          <p className="text-blue-500 font-semibold text-2xl">
            Tiến độ nhiệm vụ
          </p>
          {/* <DemoLiquid /> */}
          <Flex align="center" justify="center" wrap gap={30}>
            <Progress type="circle" size={150} percent={50} />
          </Flex>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className="text-blue-500 font-semibold text-2xl">Hiệu suất</p>
          <BarGraph options={options} data={data} />
        </div>
        <div className="h-[500px]"></div>
      </div>
    </div>
  );
}
