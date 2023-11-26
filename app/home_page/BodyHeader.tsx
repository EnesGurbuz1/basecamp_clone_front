//mobile compatibility has been implemented.
//mobil uyumluluk uygulanmıştır.

import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Dropdown, Progress, Popover, Button, Menu } from 'antd';

const BodyHeader: React.FC = () => {
  const menu = (
    <Menu items={[
      { key: "1", label: "1st item" },
      { key: "2", label: "2nd item" },
      { key: "3", label: "3rd item" }
    ]} />
  );

  const content = (
    <div>
      <p>Rename This Tools</p>
      <p>Set Up The Tools</p>
    </div>
  );

  return (
    <div className="flex flex-row items-center justify-between mx-20 my-0">
      <a href="#" className="flex items-center text-blue-500">
        <PlusOutlined /> New List
      </a>
      <span className="flex items-center">
        To-dos <Progress type="circle" percent={55} success={{ percent: 55 }} size={20} />
      </span>
      <span className="flex items-center">
        <Dropdown overlay={menu}>
          <Button>
            View as... <PlusOutlined />
          </Button>
        </Dropdown>
        <Popover content={content} title="Settings">
          <Button >...</Button>
        </Popover>
      </span>
    </div>
  );
};

export default BodyHeader;
