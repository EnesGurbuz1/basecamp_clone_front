// components/Header.tsx
import React from 'react';
import { AppstoreOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
      <div className='container mx-auto flex items-center justify-between h-14 px-4'>
        <AppstoreOutlined />
        <a href="#" className='text-blue-600'>Projects</a>
      </div>
    </div>
  );
};

export default Header;
