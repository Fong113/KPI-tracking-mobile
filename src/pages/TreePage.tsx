import type { ProgressProps } from 'antd';
import {Progress} from 'antd';
const twoColors: ProgressProps['strokeColor'] = {
  '0%': '#108ee9',
  '100%': '#87d068',
};
export default function TreePage() {
    return (
        <div>
            <div className="mb-[20px] px-[20px] flex flex-col gap-3">
                <div className="justify-center text-blue-500 font-semibold text-[24px] flex w-full">Cây đã trồng được</div>
                <div>
                    <div className="relative">
                        <div className="flex gap-2 top-0 right-[10px] absolute items-center">
                            <div className="text-[18px]">16</div>
                            <img src="treebadge.png" className="w-[20px] h-[20px] relative bottom-1" />
                        </div>
                        <img src="garden.png" />
                    </div>


                </div>
            </div>
            <div>
                <div className="justify-center text-blue-500 font-semibold text-[24px] flex w-full">Cây hiện tại</div>
                <div className="flex w-full flex-col items-center justify-between mb-10">
                    <img src="tree_2d.png" />
                    <div className='w-52'>
                        <Progress percent={60} strokeColor={twoColors} />
                    </div>
                    <div className='text-xl'>Cần thêm 40h nữa để trông cây </div>

                </div>
            </div>
        </div>

    )
}