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
const ModelTask = ({ isModalOpen, setIsModalOpen }: Props) => {

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        <div>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-row '><p className='font-semibold text-2xl text-blue-500'>Nhiệm vụ</p></div>
              <p className='text-black '>Hôm nay</p>
              <hr />
            </div>

            <div className='flex flex-col gap-5'>
              <Checkbox defaultChecked={true} onChange={onChange}>Học từ vựng 800 - 850</Checkbox>
              <Checkbox defaultChecked={true} onChange={onChange}>Học hán tự bài 7</Checkbox>
              <Checkbox defaultChecked={true} onChange={onChange}>Học ngữ pháp 10 - 20</Checkbox>
              <Checkbox onChange={onChange}>Luyện nghe</Checkbox>
              <Checkbox onChange={onChange}>Làm bài tập về nhà</Checkbox>
              <Checkbox onChange={onChange}>Chuẩn bị Mendan</Checkbox>


            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModelTask;