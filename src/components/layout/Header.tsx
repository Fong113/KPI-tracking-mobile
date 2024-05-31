import { useState } from 'react';
import MenuLeft from '../menu-left';
import BellIcon from '@/assets/icons/bell';
import { Drawer } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";


export default function Header() {
  const [open, setOpen] = useState(false);
  const [bell, setBell] = useState(false);

  const handleMenuLeft = () => {
    setOpen(true)
  }
  const handleBell = () => {
    setBell(v => !v);
  }

  return (
    <div className="shadow-sm flex flex-row items-center h-full relative">
      <div className='px-3 flex justify-between w-full'>
        <div className='flex items-center flex-row gap-[20px]'>
          <FontAwesomeIcon onClick={handleMenuLeft} color='#000' icon={faBars} size='xl' />
          <div className="font-pacifico text-blue-500 text-[20px] font-bold">
            PhoKPI
          </div>

        </div>
        <div className='flex flex-row'>
        {/* <div className='w-[30px] h-[30px] flex items-center justify-center' onClick={handleAddTask}>
            <PlusCircleOutlined className='text-black ' height={30} width={30} />
          </div> */}
          <div onClick={handleBell} className='relative'>
            <BellIcon width='20' height='30' />
            <Drawer title="Thông báo" placement='right' width={'40vh'} closable={false} open={bell}>
              <div className='flex flex-col'>
                <img src="/report1.png" alt="" />
                <img src="/report2.png" alt="" />
              </div>
            </Drawer>
          </div>
        </div>


        <MenuLeft open={open} setOpen={setOpen} />
      </div>
    </div>
  )
}