import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import MenuLeft from '../menu-left';
import BellIcon from '@/assets/icons/bell';
import { Drawer, Modal } from 'antd';



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
    <div className="flex flex-row items-center h-[5vh] relative">
      <div className='px-3 flex justify-between w-full'>
        <MenuOutlined onClick={handleMenuLeft} className='text-black' size={40} />
        <div onClick={handleBell} className='relative'>
          <BellIcon width='20' height='30' />
          {bell &&
            (
              <div className='absolute w-2/3 right-0 flex flex-col'>
                <img src="report1" alt="" />
                <img src="report2" alt="" />
              </div>
            )
          }
          <Drawer title="Menu-left" placement='right' width={'40vh'} closable={false} open={open}>
            <div className='flex flex-col gap-4'>
            </div>
          </Drawer>
        </div>
      </div>
      <MenuLeft open={open} setOpen={setOpen} />
    </div>
  )
}