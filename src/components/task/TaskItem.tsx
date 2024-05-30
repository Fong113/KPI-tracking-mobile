// import FlagIcon from "@/assets/icons/flag";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
type IProps = {
    name?: string;
    date: string;
    status: string;
    category: string
}
export default function TaskItem(
    {
        name,
        date,
        status,
        category,
    }: IProps
) {
    return (
        <div className={`flex flex-col gap-3 p-3 ${status === "done" ? "bg-blue-100" : "bg-red-100"} w-[48%] rounded-lg`}>
            <div className="flex flex-row justify-between items-center">
                <div className="text-[14px] h-[18px] overflow-hidden">{name}</div>
                <div className="text-[14px] h-[18px] overflow-hidden">{date}</div>
            </div>
            <div className={`flex text-[12px] items-center w-fit px-[4px] rounded-md ${status == "done" ? "bg-blue-400" : "bg-red-400"}`}>
                {status === "done" ? "Đã hoàn thành" : "Chưa hoàn thành"}
            </div>
            <div className="flex justify-between">
                <div className="flex flex-row  items-center gap-2">

                    <div className='flex flex-row gap-1 h-[14px] items-center font-semibold text-blue-900'><FontAwesomeIcon icon={faLayerGroup} size='xs' style={{color: "#B197FC",}} />{category}</div>
                </div>
                <img src="avt.png" className="w-[20px] h-[20px] rounded-full" />

            </div>
        </div>

    );
}
