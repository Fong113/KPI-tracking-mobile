import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { AntAnchor } from 'antd/es/anchor/Anchor';
import { SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
type Props = {
  open: boolean;
  setOpen: any
}
const MenuLeft = ({ open, setOpen }: Props) => {
  const navigate = useNavigate()

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer title="Menu-left" placement='left' width={'40vh'} closable={false} onClose={onClose} open={open}>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 cursor-pointer' onClick={():void => navigate('/setting')}>
            <SettingOutlined  /> <span>Cài đặt</span>
          </div>
          <div className='text-red-500 flex items-center gap-3 cursor-pointer'>
            <LogoutOutlined /> <span>Đăng xuất</span>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MenuLeft;