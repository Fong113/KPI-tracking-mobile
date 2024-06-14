import { Progress } from "antd"

// type KPICardProp = {

// }


export default function KPICard() {

  return (
    <div className="bg-blue-500 h-44 rounded-2xl mx-5 p-5 flex flex-row justify-between">
      <div className="">
        <div>
          <span>icon</span>
          <span>
            Label
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Progress className="text-white " strokeColor={'blue'} type="circle" size={100} percent={22.22} />
      </div>

    </div>
  )
}