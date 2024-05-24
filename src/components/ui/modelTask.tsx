import React, { useState } from 'react';
import { Button, Modal, Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

type Props = {
  isModalOpen: boolean,
  setIsModalOpen: any,

}
const ModelTask = ({isModalOpen,setIsModalOpen } : Props) => {

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal  open={isModalOpen} footer={null}  onCancel={handleCancel}>
        <div>
          <div className='flex flex-col'>
            <div  className='flex flex-col'>
              <div className='flex flex-row justify-between'><p>Nhiệm vụ</p><span>icon</span></div>
              <p>Hôm nay</p>
            </div>

            <div className='flex flex-col'>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>

            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModelTask;