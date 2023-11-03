import { Input } from 'antd';
import React from 'react';

const PrivateChat: React.FC = () => {
  return (
    <div className="min-h-screen body flex flex-col justify-center items-center p-4 sm:p-8">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">

        <Input 
          placeholder="Start a private chat with..." 
          size="large" 
          className="pl-8 rounded-full border-2 border-blue-200 shadow-sm text-sm focus:outline-none focus:border-blue-500"
        />

        <div className="mt-8 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <svg className="w-6 h-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4M17 16V4m0 0l-4 4m4-4l4 4" />
            </svg>
          </div>

          <div className="border-dashed border-2 border-yellow-500 p-8 rounded-lg">
            <p className="text-yellow-500 font-semibold mb-2 text-sm">
              Pings are private chats with one or more people
            </p>
            <p className="text-gray-500 text-sm">
              Start your first conversation by typing someone’s name.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateChat;
