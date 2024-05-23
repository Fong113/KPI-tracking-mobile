import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import MenuLeft from '../menu-left';
import { Menu } from 'antd';



export default function Header() {
  const [open, setOpen] = useState(false);
  const handleMenuLeft = () => {
  setOpen(true)
  }
  return (
    <div className="flex flex-row items-center h-[5vh]">
      <div className='ml-3'>
        <MenuOutlined  onClick={handleMenuLeft} className='text-black'  size={40} />
      </div>
      <MenuLeft open={open} setOpen={setOpen} />

    </div>
  )
}