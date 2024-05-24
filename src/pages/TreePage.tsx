export default function TreePage() {
    return (
        <div className="mb-[20px] px-[20px] flex flex-col gap-[20px]">
            <div className="justify-center text-blue-500 font-semibold text-[24px] flex w-full">Cây của tôi</div>
            <div>
            <div className="relative">
                <div className="flex gap-2 top-0 right-[10px] absolute items-center">
                    <div className="text-[18px]">16</div>
                    <img src="treebadge.png" className="w-[20px] h-[20px] relative bottom-1"/>
                </div>
                <img src="garden.png" />
            </div>

           <div className="flex w-full items-center justify-between relative left-2">
            <img src="tree_2d.png" />
           </div>
            </div>
        </div>
    )
}