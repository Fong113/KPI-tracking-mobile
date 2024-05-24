import FlagIcon from "@/assets/icons/flag";

type IProps = {
    name?: string;
    date: string;
    status: string;
}
export default function TaskItem(
    {
        name,
        date,
        status
    }: IProps
) {
    return (
        <div className={`flex flex-col gap-[8px] py-1 ${status == "1" ? "bg-blue-200" : "bg-red-200"} w-[46%] px-[8px] rounded-lg`}>
            <div className="flex flex-row justify-between items-center">
                <div className="text-[14px]">{name}</div>
                <div className="text-[14px]">{date}</div>
            </div>
            <div className={`flex items-center w-fit py-[2px] px-[4px] rounded-md ${status == "1" ? "bg-blue-400" : "bg-red-400"}`}>
                {status == "1" ? "Đã hoàn thành" : "Chưa hoàn thành"}
            </div>
            <div className="flex justify-between">
                <FlagIcon />
                <img src="avt.png" className="w-[10px] h-[10px] rounded-full" />
            </div>
        </div>

    );
}
