//mobile compatibility has been implemented.
//mobil uyumluluk uygulanmıştır.
"use client"
import React from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Progress, Button, Checkbox } from 'antd';

const BodyToDo2: React.FC = () => {
  return (
    <div className="relative p-5 rounded-md mb-5 bg-white">
      <div className="text-gray-600 text-xs ml-12">1/3 completed</div>
      <div className="flex flex-col items-start justify-center">
        <div className="flex items-center mb-2.5">
          <span className="mr-1.5"><MenuOutlined /></span>
          <Progress type="circle" percent={100} success={{ percent: 35 }} size="small" />
          <a href="#" className="ml-1.5 text-lg leading-6 font-semibold">MatterMost</a>
        </div>
        <div className="flex items-center mb-2.5">
          <span className="mr-4"><MenuOutlined /></span>
          <Checkbox>ssl</Checkbox>
        </div>
        <div className="flex items-center mb-2.5">
          <span className="mr-4"><MenuOutlined /></span>
          <Checkbox>call etkin hale getirilecek</Checkbox>
        </div>
        <div className="mt-2.5 ml-7 mb-2.5">
          <Button>Add a to-do</Button>
        </div>
        <div className="ml-7">
          <Checkbox>team.nuvecore.com yönlendirelecek</Checkbox>
        </div>
      </div>
    </div>
  );
};

export default BodyToDo2;
